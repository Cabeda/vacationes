import { describe, it, expect } from 'vitest';
import { calculateBalance, calculateAllBalances, canTakeLeave, getWorkingDays, getEntriesForDateRange } from '$lib/balance';
import type { Profile, LeaveType, Entry } from '$lib/types';

describe('balance', () => {
  const mockProfile: Profile = {
    id: 'profile-1',
    name: 'Test User',
    municipality: 'Lisboa',
    color: '#3B82F6',
    leaveBalances: {
      'ferias': 22,
      'flex': 5,
      'baixa': 0
    }
  };
  
  const mockLeaveTypes: Record<string, LeaveType> = {
    'ferias': {
      id: 'ferias',
      name: { pt: 'Férias', en: 'Vacation' },
      color: '#3B82F6',
      icon: '🏖️',
      annualAllowance: 22,
      deductsFrom: null,
      halfDayAllowed: true,
      isDefault: true,
      order: 1
    },
    'flex': {
      id: 'flex',
      name: { pt: 'Dias Flex', en: 'Flex Days' },
      color: '#8B5CF6',
      icon: '✨',
      annualAllowance: 5,
      deductsFrom: null,
      halfDayAllowed: false,
      isDefault: true,
      order: 2
    },
    'meio-dia': {
      id: 'meio-dia',
      name: { pt: 'Meio Dia', en: 'Half Day' },
      color: '#F59E0B',
      icon: '⏰',
      annualAllowance: null,
      deductsFrom: 'ferias',
      halfDayAllowed: false,
      isDefault: true,
      order: 3
    },
    'baixa': {
      id: 'baixa',
      name: { pt: 'Baixa', en: 'Sick Leave' },
      color: '#EF4444',
      icon: '🏥',
      annualAllowance: null,
      deductsFrom: null,
      halfDayAllowed: false,
      isDefault: true,
      order: 4
    }
  };
  
  const mockEntries: Record<string, Entry> = {
    'entry-1': {
      id: 'entry-1',
      personId: 'profile-1',
      leaveTypeId: 'ferias',
      startDate: '2024-06-10',
      endDate: '2024-06-14',
      halfDay: null,
      label: 'Summer vacation',
      notes: '',
      destination: 'Algarve',
      budget: 500,
      status: 'planned',
      createdAt: '2024-01-01'
    }
  };
  
  describe('calculateBalance', () => {
    it('should calculate correct balance with no entries', () => {
      const result = calculateBalance(mockProfile, mockLeaveTypes['ferias'], mockLeaveTypes, []);
      expect(result.allowance).toBe(22);
      expect(result.used).toBe(0);
      expect(result.remaining).toBe(22);
    });
    
    it('should calculate correct balance with entries', () => {
      const result = calculateBalance(mockProfile, mockLeaveTypes['ferias'], mockLeaveTypes, Object.values(mockEntries));
      expect(result.allowance).toBe(22);
      expect(result.used).toBe(5);
      expect(result.remaining).toBe(17);
    });
    
    it('should handle half-day entries from deducting types', () => {
      const entriesWithHalfDay: Entry[] = [
        ...Object.values(mockEntries),
        {
          id: 'entry-half',
          personId: 'profile-1',
          leaveTypeId: 'meio-dia',
          startDate: '2024-06-15',
          endDate: '2024-06-15',
          halfDay: 'morning',
          label: 'Half day',
          notes: '',
          destination: '',
          budget: null,
          status: 'planned',
          createdAt: '2024-01-01'
        }
      ];
      
      const result = calculateBalance(mockProfile, mockLeaveTypes['ferias'], mockLeaveTypes, entriesWithHalfDay);
      expect(result.used).toBe(5.5);
      expect(result.remaining).toBe(16.5);
    });
    
    it('should handle unlimited leave types', () => {
      const result = calculateBalance(mockProfile, mockLeaveTypes['baixa'], mockLeaveTypes, Object.values(mockEntries));
      expect(result.allowance).toBe(0);
      expect(result.used).toBe(0);
    });
    
    it('should use custom balance if set on profile', () => {
      const profileWithCustom = {
        ...mockProfile,
        leaveBalances: {
          ...mockProfile.leaveBalances,
          'ferias': 25
        }
      };
      
      const result = calculateBalance(profileWithCustom, mockLeaveTypes['ferias'], mockLeaveTypes, []);
      expect(result.allowance).toBe(25);
    });
  });
  
  describe('calculateAllBalances', () => {
    it('should return balances for all tracked leave types', () => {
      const result = calculateAllBalances(mockProfile, mockLeaveTypes, mockEntries);
      
      expect(result).toHaveLength(2);
      expect(result.map(b => b.leaveTypeId).sort()).toEqual(['ferias', 'flex']);
    });
    
    it('should exclude unlimited leave types', () => {
      const result = calculateAllBalances(mockProfile, mockLeaveTypes, mockEntries);
      const leaveTypeIds = result.map(b => b.leaveTypeId);
      
      expect(leaveTypeIds).not.toContain('baixa');
      expect(leaveTypeIds).not.toContain('meio-dia');
    });
  });
  
  describe('canTakeLeave', () => {
    it('should allow leave if balance is sufficient', () => {
      const balance = { leaveTypeId: 'ferias', allowance: 22, used: 10, remaining: 12 };
      const result = canTakeLeave(balance, 5);
      expect(result.canTake).toBe(true);
    });
    
    it('should allow leave if balance equals requested', () => {
      const balance = { leaveTypeId: 'ferias', allowance: 22, used: 17, remaining: 5 };
      const result = canTakeLeave(balance, 5);
      expect(result.canTake).toBe(true);
    });
    
    it('should deny leave if balance is insufficient', () => {
      const balance = { leaveTypeId: 'ferias', allowance: 22, used: 20, remaining: 2 };
      const result = canTakeLeave(balance, 5);
      expect(result.canTake).toBe(false);
      expect(result.message).toContain('Insufficient balance');
    });
    
    it('should allow unlimited leave', () => {
      const balance = { leaveTypeId: 'baixa', allowance: 0, used: 10, remaining: 10 };
      const result = canTakeLeave(balance, 30);
      expect(result.canTake).toBe(true);
    });
  });
  
  describe('getWorkingDays', () => {
    it('should count weekdays excluding holidays', () => {
      const holidays = ['2024-06-13'];
      const result = getWorkingDays('2024-06-10', '2024-06-14', holidays);
      expect(result).toBe(4);
    });
    
    it('should return 0 for weekend-only range', () => {
      const result = getWorkingDays('2024-06-08', '2024-06-09');
      expect(result).toBe(0);
    });
    
    it('should handle single day', () => {
      const result = getWorkingDays('2024-06-10', '2024-06-10');
      expect(result).toBe(1);
    });
  });

  describe('getEntriesForDateRange', () => {
    const entries: Record<string, Entry> = {
      'entry1': {
        id: 'entry1',
        personId: 'profile-1',
        leaveTypeId: 'ferias',
        startDate: '2024-06-10',
        endDate: '2024-06-15',
        halfDay: null,
        label: 'Vacation',
        notes: '',
        destination: '',
        budget: null,
        status: 'planned',
        createdAt: '2024-01-01'
      },
      'entry2': {
        id: 'entry2',
        personId: 'profile-1',
        leaveTypeId: 'ferias',
        startDate: '2024-07-01',
        endDate: '2024-07-05',
        halfDay: null,
        label: 'More vacation',
        notes: '',
        destination: '',
        budget: null,
        status: 'planned',
        createdAt: '2024-01-01'
      },
      'entry3': {
        id: 'entry3',
        personId: 'other-person',
        leaveTypeId: 'ferias',
        startDate: '2024-06-10',
        endDate: '2024-06-15',
        halfDay: null,
        label: 'Other person vacation',
        notes: '',
        destination: '',
        budget: null,
        status: 'planned',
        createdAt: '2024-01-01'
      }
    };

    it('should return entries within date range for correct person', () => {
      const result = getEntriesForDateRange(entries, 'profile-1', '2024-06-01', '2024-06-30');
      expect(result.length).toBe(1);
      expect(result[0].id).toBe('entry1');
    });

    it('should return entries that span the date range', () => {
      const result = getEntriesForDateRange(entries, 'profile-1', '2024-06-12', '2024-06-20');
      expect(result.length).toBe(1);
      expect(result[0].id).toBe('entry1');
    });

    it('should not return entries for other person', () => {
      const result = getEntriesForDateRange(entries, 'profile-1', '2024-06-01', '2024-07-31');
      expect(result.every(e => e.personId === 'profile-1')).toBe(true);
    });

    it('should return multiple entries in range', () => {
      const result = getEntriesForDateRange(entries, 'profile-1', '2024-06-01', '2024-07-31');
      expect(result.length).toBe(2);
    });

    it('should return empty array when no entries in range', () => {
      const result = getEntriesForDateRange(entries, 'profile-1', '2024-08-01', '2024-08-31');
      expect(result.length).toBe(0);
    });
  });
});
