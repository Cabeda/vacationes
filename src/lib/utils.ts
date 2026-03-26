import type { DateRange, Entry, Holiday } from './types';

export function generateId(): string {
  return crypto.randomUUID();
}

export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function parseDate(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function daysBetween(start: Date, end: Date): number {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((end.getTime() - start.getTime()) / oneDay)) + 1;
}

export function isDateInRange(date: Date, range: DateRange): boolean {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const s = new Date(range.start.getFullYear(), range.start.getMonth(), range.start.getDate());
  const e = new Date(range.end.getFullYear(), range.end.getMonth(), range.end.getDate());
  return d >= s && d <= e;
}

export function getDateRange(startDate: string, endDate: string, halfDay?: 'morning' | 'afternoon' | null): number {
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  let days = daysBetween(start, end);
  
  if (halfDay) {
    days = 0.5;
  }
  
  return days;
}

export function getEntriesInMonth(entries: Entry[], year: number, month: number): Entry[] {
  return Object.values(entries).filter(entry => {
    const start = parseDate(entry.startDate);
    const end = parseDate(entry.endDate);
    const entryYear = start.getFullYear();
    const entryMonth = start.getMonth();
    
    if (entryYear === year && entryMonth === month) {return true;}
    if (entryYear === year && end.getMonth() === month && end.getFullYear() === year) {return true;}
    if (entryYear <= year && end.getMonth() >= month && end.getFullYear() === year) {return true;}
    if (entryYear <= year && start.getMonth() <= month && end.getFullYear() >= year) {return true;}
    
    return false;
  });
}

export function getHolidaysInMonth(holidays: Holiday[], year: number, month: number): Holiday[] {
  return holidays.filter(holiday => {
    const date = parseDate(holiday.date);
    return date.getFullYear() === year && date.getMonth() === month;
  });
}

export function isHoliday(date: Date, holidays: Holiday[]): Holiday | null {
  const dateStr = formatDate(date);
  return holidays.find(h => h.date === dateStr) || null;
}

export function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

export function getMonthDays(year: number, month: number): Date[] {
  const days: Date[] = [];
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  
  const startPadding = firstDay.getDay();
  for (let i = startPadding - 1; i >= 0; i--) {
    const d = new Date(year, month, -i);
    days.push(d);
  }
  
  for (let i = 1; i <= lastDay.getDate(); i++) {
    days.push(new Date(year, month, i));
  }
  
  const endPadding = 42 - days.length;
  for (let i = 1; i <= endPadding; i++) {
    days.push(new Date(year, month + 1, i));
  }
  
  return days;
}

export function normalizeLocale(locale: string | null | undefined): 'pt' | 'en' {
  if (!locale) {return 'pt';}
  return locale.startsWith('en') ? 'en' : 'pt';
}

export function getMonthName(month: number, locale: string = 'pt'): string {
  const months = {
    pt: [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ],
    en: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
  };
  return months[normalizeLocale(locale)][month];
}

export function getDayName(day: number, locale: string = 'pt', short = false): string {
  const days = {
    pt: short ? ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'] : ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    en: short ? ['S', 'M', 'T', 'W', 'T', 'F', 'S'] : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  };
  return days[normalizeLocale(locale)][day];
}

export function getDaysUsed(entry: Entry): number {
  if (entry.halfDay) {
    return 0.5;
  }
  return getDateRange(entry.startDate, entry.endDate);
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
