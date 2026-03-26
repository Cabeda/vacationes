export interface LeaveType {
  id: string;
  name: { pt: string; en: string };
  color: string;
  icon: string;
  annualAllowance: number | null;
  deductsFrom: string | null;
  halfDayAllowed: boolean;
  isDefault: boolean;
  order: number;
}

export interface Profile {
  id: string;
  name: string;
  municipality: string;
  color: string;
  leaveBalances: Record<string, number>;
}

export interface Entry {
  id: string;
  personId: string;
  leaveTypeId: string;
  startDate: string;
  endDate: string;
  halfDay: 'morning' | 'afternoon' | null;
  label: string;
  notes: string;
  destination: string;
  budget: number | null;
  status: 'planned' | 'confirmed' | 'completed';
  createdAt: string;
}

export interface Holiday {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: string[] | null;
  launchYear: number | null;
  types: string[];
}

export interface Settings {
  year: number;
  language: 'pt' | 'en';
}

export interface VacationesDoc {
  profiles: Record<string, Profile>;
  leaveTypes: Record<string, LeaveType>;
  entries: Record<string, Entry>;
  holidays: Record<number, Holiday[]>;
  settings: Settings;
  pairedDevices: Record<string, PairedDevice>;
}

export interface PairedDevice {
  id: string;
  name: string;
  lastConnected: string | null;
  peerId: string;
}

export interface BalanceInfo {
  leaveTypeId: string;
  allowance: number;
  used: number;
  remaining: number;
}

export type EntryStatus = 'planned' | 'confirmed' | 'completed';

export type HalfDayOption = 'morning' | 'afternoon' | null;

export type Language = 'pt' | 'en';

export interface DateRange {
  start: Date;
  end: Date;
}
