import type { Entry, LeaveType, Profile, BalanceInfo } from './types';
import { getDateRange, parseDate } from './utils';

export function calculateBalance(
  profile: Profile,
  leaveType: LeaveType,
  leaveTypes: Record<string, LeaveType>,
  entries: Entry[]
): BalanceInfo {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const allowance = profile.leaveBalances[leaveType.id] !== undefined
    ? profile.leaveBalances[leaveType.id]
    : (leaveType.annualAllowance ?? -1);
  
  const relevantEntries = Object.values(entries).filter(
    e => e.personId === profile.id && e.leaveTypeId === leaveType.id
  );
  
  let used = 0;
  for (const entry of relevantEntries) {
    used += getDateRange(entry.startDate, entry.endDate, entry.halfDay);
  }
  
  const deductingTypes = Object.values(leaveTypes).filter(lt => lt.deductsFrom === leaveType.id);
  for (const deducingType of deductingTypes) {
    const deductingEntries = Object.values(entries).filter(
      e => e.personId === profile.id && e.leaveTypeId === deducingType.id && e.halfDay
    );
    used += deductingEntries.length * 0.5;
  }
  
  const remaining = allowance >= 0 ? allowance - used : used;
  
  return {
    leaveTypeId: leaveType.id,
    allowance: allowance >= 0 ? allowance : 0,
    used,
    remaining: allowance >= 0 ? remaining : used
  };
}

export function calculateAllBalances(
  profile: Profile,
  leaveTypes: Record<string, LeaveType>,
  entries: Record<string, Entry>
): BalanceInfo[] {
  return Object.values(leaveTypes)
    .filter(lt => lt.annualAllowance !== null)
    .map(lt => calculateBalance(profile, lt, leaveTypes, Object.values(entries)))
    .filter(b => b.allowance > 0);
}

export function getEntriesForDateRange(
  entries: Record<string, Entry>,
  personId: string,
  startDate: string,
  endDate: string
): Entry[] {
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  
  return Object.values(entries).filter(entry => {
    if (entry.personId !== personId) {return false;}
    
    const entryStart = parseDate(entry.startDate);
    const entryEnd = parseDate(entry.endDate);
    
    return entryStart <= end && entryEnd >= start;
  });
}

export function getWorkingDays(startDate: string, endDate: string, holidays: string[] = []): number {
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  let days = 0;
  
  const current = new Date(start);
  while (current <= end) {
    const dayOfWeek = current.getDay();
    const dateStr = current.toISOString().split('T')[0];
    const isHoliday = holidays.includes(dateStr);
    
    if (dayOfWeek !== 0 && dayOfWeek !== 6 && !isHoliday) {
      days++;
    }
    
    current.setDate(current.getDate() + 1);
  }
  
  return days;
}

export function canTakeLeave(
  balance: BalanceInfo,
  daysRequested: number
): { canTake: boolean; message?: string } {
  if (balance.allowance <= 0) {
    return { canTake: true };
  }
  
  if (balance.remaining < daysRequested) {
    return {
      canTake: false,
      message: `Insufficient balance. You have ${balance.remaining} days remaining but requested ${daysRequested} days.`
    };
  }
  
  return { canTake: true };
}
