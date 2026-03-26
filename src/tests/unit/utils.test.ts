import { describe, it, expect } from 'vitest';

import type { Entry, Holiday } from '$lib/types';
import {
  generateId,
  formatDate,
  parseDate,
  addDays,
  daysBetween,
  isDateInRange,
  getDateRange,
  getCurrentYear,
  clamp,
  getEntriesInMonth,
  getHolidaysInMonth,
  isHoliday,
  isWeekend,
  getMonthDays,
  getMonthName,
  getDayName,
  getDaysUsed
} from '$lib/utils';

describe('utils', () => {
  describe('generateId', () => {
    it('should generate a valid UUID', () => {
      const id = generateId();
      expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);
    });
    
    it('should generate unique IDs', () => {
      const ids = new Set(Array.from({ length: 100 }, () => generateId()));
      expect(ids.size).toBe(100);
    });
  });
  
  describe('formatDate', () => {
    it('should format date as YYYY-MM-DD', () => {
      const date = new Date(2024, 5, 15);
      expect(formatDate(date)).toBe('2024-06-15');
    });
    
    it('should pad single digit months and days', () => {
      const date = new Date(2024, 0, 5);
      expect(formatDate(date)).toBe('2024-01-05');
    });
  });
  
  describe('parseDate', () => {
    it('should parse YYYY-MM-DD string to Date', () => {
      const date = parseDate('2024-06-15');
      expect(date.getFullYear()).toBe(2024);
      expect(date.getMonth()).toBe(5);
      expect(date.getDate()).toBe(15);
    });
  });
  
  describe('addDays', () => {
    it('should add positive days', () => {
      const date = new Date(2024, 5, 15);
      const result = addDays(date, 5);
      expect(result.getDate()).toBe(20);
    });
    
    it('should subtract negative days', () => {
      const date = new Date(2024, 5, 15);
      const result = addDays(date, -5);
      expect(result.getDate()).toBe(10);
    });
  });
  
  describe('daysBetween', () => {
    it('should return 1 for same day', () => {
      const date = new Date(2024, 5, 15);
      expect(daysBetween(date, date)).toBe(1);
    });
    
    it('should return correct days for range', () => {
      const start = new Date(2024, 5, 10);
      const end = new Date(2024, 5, 15);
      expect(daysBetween(start, end)).toBe(6);
    });
    
    it('should work regardless of order', () => {
      const start = new Date(2024, 5, 10);
      const end = new Date(2024, 5, 15);
      expect(daysBetween(end, start)).toBe(6);
    });
  });
  
  describe('isDateInRange', () => {
    it('should return true if date is in range', () => {
      const date = new Date(2024, 5, 15);
      const range = {
        start: new Date(2024, 5, 10),
        end: new Date(2024, 5, 20)
      };
      expect(isDateInRange(date, range)).toBe(true);
    });
    
    it('should return true if date equals start', () => {
      const date = new Date(2024, 5, 10);
      const range = {
        start: new Date(2024, 5, 10),
        end: new Date(2024, 5, 20)
      };
      expect(isDateInRange(date, range)).toBe(true);
    });
    
    it('should return true if date equals end', () => {
      const date = new Date(2024, 5, 20);
      const range = {
        start: new Date(2024, 5, 10),
        end: new Date(2024, 5, 20)
      };
      expect(isDateInRange(date, range)).toBe(true);
    });
    
    it('should return false if date is before range', () => {
      const date = new Date(2024, 5, 5);
      const range = {
        start: new Date(2024, 5, 10),
        end: new Date(2024, 5, 20)
      };
      expect(isDateInRange(date, range)).toBe(false);
    });
    
    it('should return false if date is after range', () => {
      const date = new Date(2024, 5, 25);
      const range = {
        start: new Date(2024, 5, 10),
        end: new Date(2024, 5, 20)
      };
      expect(isDateInRange(date, range)).toBe(false);
    });
  });
  
  describe('getDateRange', () => {
    it('should return number of days for a range', () => {
      expect(getDateRange('2024-06-10', '2024-06-15')).toBe(6);
    });
    
    it('should return 0.5 for half day', () => {
      expect(getDateRange('2024-06-10', '2024-06-10', 'morning')).toBe(0.5);
      expect(getDateRange('2024-06-10', '2024-06-10', 'afternoon')).toBe(0.5);
    });
    
    it('should return 1 for single day without half day', () => {
      expect(getDateRange('2024-06-10', '2024-06-10')).toBe(1);
    });
  });
  
  describe('getCurrentYear', () => {
    it('should return current year', () => {
      expect(getCurrentYear()).toBe(new Date().getFullYear());
    });
  });
  
  describe('clamp', () => {
    it('should return value if within range', () => {
      expect(clamp(5, 0, 10)).toBe(5);
    });
    
    it('should return min if value is below', () => {
      expect(clamp(-5, 0, 10)).toBe(0);
    });
    
    it('should return max if value is above', () => {
      expect(clamp(15, 0, 10)).toBe(10);
    });
    
    it('should work with floating point', () => {
      expect(clamp(5.5, 0, 10)).toBe(5.5);
    });
  });

  describe('getEntriesInMonth', () => {
    const mockEntries: Record<string, Entry> = {
      'entry1': {
        id: 'entry1',
        personId: 'person1',
        leaveTypeId: 'ferias',
        startDate: '2024-06-10',
        endDate: '2024-06-15',
        halfDay: null,
        label: 'Vacation',
        notes: '',
        destination: 'Beach',
        budget: null,
        status: 'planned',
        createdAt: '2024-01-01'
      },
      'entry2': {
        id: 'entry2',
        personId: 'person1',
        leaveTypeId: 'ferias',
        startDate: '2024-05-20',
        endDate: '2024-06-05',
        halfDay: null,
        label: 'Vacation',
        notes: '',
        destination: '',
        budget: null,
        status: 'planned',
        createdAt: '2024-01-01'
      },
      'entry3': {
        id: 'entry3',
        personId: 'person1',
        leaveTypeId: 'ferias',
        startDate: '2024-07-01',
        endDate: '2024-07-05',
        halfDay: null,
        label: 'Vacation',
        notes: '',
        destination: '',
        budget: null,
        status: 'planned',
        createdAt: '2024-01-01'
      }
    };

    it('should return entries that start in the month', () => {
      const result = getEntriesInMonth(mockEntries as unknown as Entry[], 2024, 5);
      expect(result.some(e => e.id === 'entry1')).toBe(true);
    });

    it('should return entries that end in the month', () => {
      const result = getEntriesInMonth(mockEntries as unknown as Entry[], 2024, 6);
      expect(result.some(e => e.id === 'entry2')).toBe(true);
    });

    it('should return entries that span across the month', () => {
      const result = getEntriesInMonth(mockEntries as unknown as Entry[], 2024, 6);
      expect(result.some(e => e.id === 'entry2')).toBe(true);
    });

    it('should return entries for specific month correctly', () => {
      const juneResult = getEntriesInMonth(mockEntries as unknown as Entry[], 2024, 5);
      expect(juneResult.length).toBeGreaterThan(0);
      expect(juneResult.some(e => e.id === 'entry1')).toBe(true);
    });
  });

  describe('getHolidaysInMonth', () => {
    const mockHolidays: Holiday[] = [
      { date: '2024-01-01', localName: 'Ano Novo', name: 'New Year', countryCode: 'PT', fixed: true, global: true, counties: null, launchYear: null, types: ['Public'] },
      { date: '2024-04-25', localName: 'Dia da Liberdade', name: 'Freedom Day', countryCode: 'PT', fixed: true, global: true, counties: null, launchYear: null, types: ['Public'] },
      { date: '2024-06-10', localName: 'Dia de Portugal', name: 'Portugal Day', countryCode: 'PT', fixed: true, global: true, counties: null, launchYear: null, types: ['Public'] }
    ];

    it('should return holidays in the specified month', () => {
      const result = getHolidaysInMonth(mockHolidays, 2024, 5);
      expect(result.length).toBe(1);
      expect(result[0].date).toBe('2024-06-10');
    });

    it('should return empty array for month with no holidays', () => {
      const result = getHolidaysInMonth(mockHolidays, 2024, 2);
      expect(result.length).toBe(0);
    });
  });

  describe('isHoliday', () => {
    const mockHolidays: Holiday[] = [
      { date: '2024-06-10', localName: 'Dia de Portugal', name: 'Portugal Day', countryCode: 'PT', fixed: true, global: true, counties: null, launchYear: null, types: ['Public'] }
    ];

    it('should return the holiday if date is a holiday', () => {
      const date = new Date(2024, 5, 10);
      const result = isHoliday(date, mockHolidays);
      expect(result).not.toBeNull();
      expect(result?.date).toBe('2024-06-10');
    });

    it('should return null if date is not a holiday', () => {
      const date = new Date(2024, 5, 11);
      const result = isHoliday(date, mockHolidays);
      expect(result).toBeNull();
    });
  });

  describe('isWeekend', () => {
    it('should return true for Saturday', () => {
      const saturday = new Date(2024, 5, 15);
      expect(isWeekend(saturday)).toBe(true);
    });

    it('should return true for Sunday', () => {
      const sunday = new Date(2024, 5, 16);
      expect(isWeekend(sunday)).toBe(true);
    });

    it('should return false for weekdays', () => {
      const monday = new Date(2024, 5, 17);
      const friday = new Date(2024, 5, 21);
      expect(isWeekend(monday)).toBe(false);
      expect(isWeekend(friday)).toBe(false);
    });
  });

  describe('getMonthDays', () => {
    it('should return 42 days for a month view', () => {
      const days = getMonthDays(2024, 5);
      expect(days.length).toBe(42);
    });

    it('should include days from previous month for padding', () => {
      const days = getMonthDays(2024, 5);
      expect(days.length).toBe(42);
      expect(days[0].getMonth()).toBe(4);
    });

    it('should include days from next month for padding', () => {
      const days = getMonthDays(2024, 5);
      expect(days.length).toBe(42);
      expect(days[days.length - 1].getMonth()).toBe(6);
    });
  });

  describe('getMonthName', () => {
    it('should return Portuguese month name', () => {
      expect(getMonthName(0, 'pt')).toBe('Janeiro');
      expect(getMonthName(5, 'pt')).toBe('Junho');
      expect(getMonthName(11, 'pt')).toBe('Dezembro');
    });

    it('should return English month name', () => {
      expect(getMonthName(0, 'en')).toBe('January');
      expect(getMonthName(5, 'en')).toBe('June');
      expect(getMonthName(11, 'en')).toBe('December');
    });

    it('should default to Portuguese', () => {
      expect(getMonthName(0)).toBe('Janeiro');
    });
  });

  describe('getDayName', () => {
    it('should return Portuguese day name', () => {
      expect(getDayName(0, 'pt')).toBe('Domingo');
      expect(getDayName(1, 'pt')).toBe('Segunda');
      expect(getDayName(6, 'pt')).toBe('Sábado');
    });

    it('should return English day name', () => {
      expect(getDayName(0, 'en')).toBe('Sunday');
      expect(getDayName(1, 'en')).toBe('Monday');
      expect(getDayName(6, 'en')).toBe('Saturday');
    });

    it('should return short day name', () => {
      expect(getDayName(0, 'pt', true)).toBe('D');
      expect(getDayName(1, 'pt', true)).toBe('S');
    });

    it('should default to Portuguese', () => {
      expect(getDayName(0)).toBe('Domingo');
    });
  });

  describe('getDaysUsed', () => {
    it('should return 0.5 for half day entry', () => {
      const entry: Entry = {
        id: 'entry1',
        personId: 'person1',
        leaveTypeId: 'ferias',
        startDate: '2024-06-10',
        endDate: '2024-06-10',
        halfDay: 'morning',
        label: 'Half day',
        notes: '',
        destination: '',
        budget: null,
        status: 'planned',
        createdAt: '2024-01-01'
      };
      expect(getDaysUsed(entry)).toBe(0.5);
    });

    it('should return date range for full day entry', () => {
      const entry: Entry = {
        id: 'entry1',
        personId: 'person1',
        leaveTypeId: 'ferias',
        startDate: '2024-06-10',
        endDate: '2024-06-15',
        halfDay: null,
        label: 'Full days',
        notes: '',
        destination: '',
        budget: null,
        status: 'planned',
        createdAt: '2024-01-01'
      };
      expect(getDaysUsed(entry)).toBe(6);
    });
  });
});
