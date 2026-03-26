import type { Holiday } from './types';

const NAGER_API_BASE = 'https://date.nager.at/api/v3';

export async function fetchNationalHolidays(year: number): Promise<Holiday[]> {
  try {
    const response = await fetch(`${NAGER_API_BASE}/PublicHolidays/${year}/PT`);
    if (!response.ok) {
      throw new Error(`Failed to fetch holidays: ${response.status}`);
    }
    return (await response.json()) as Holiday[];
  } catch (error) {
    console.error('Error fetching national holidays:', error);
    return [];
  }
}

export function isMunicipalHoliday(date: string, municipality: string): boolean {
  const municipalHolidays = getMunicipalHolidays();
  const holiday = municipalHolidays.find(h => h.date === date && h.municipality === municipality);
  return !!holiday;
}

export function getMunicipalHolidays(): Array<{ date: string; municipality: string; name: string }> {
  return [
    { date: '2024-06-13', municipality: 'Lisboa', name: 'Santo António' },
    { date: '2024-06-24', municipality: 'Porto', name: 'São João' },
    { date: '2024-06-13', municipality: 'Porto', name: 'Santo António' },
    { date: '2025-06-13', municipality: 'Lisboa', name: 'Santo António' },
    { date: '2025-06-24', municipality: 'Porto', name: 'São João' },
    { date: '2026-06-13', municipality: 'Lisboa', name: 'Santo António' },
    { date: '2026-06-24', municipality: 'Porto', name: 'São João' },
    { date: '2027-06-13', municipality: 'Lisboa', name: 'Santo António' },
    { date: '2027-06-24', municipality: 'Porto', name: 'São João' },
  ];
}

export function addMunicipalHolidays(holidays: Holiday[], municipality: string): Holiday[] {
  const municipal = getMunicipalHolidays();
  const year = holidays[0] ? new Date(holidays[0].date).getFullYear() : new Date().getFullYear();
  
  const municipalForYear = municipal.filter(h => {
    const hYear = new Date(h.date).getFullYear();
    return hYear === year;
  });
  
  const municipalHolidays: Holiday[] = municipalForYear
    .filter(h => h.municipality === municipality)
    .map(h => ({
      date: h.date,
      localName: h.name,
      name: h.name,
      countryCode: 'PT',
      fixed: true,
      global: false,
      counties: [municipality],
      launchYear: null,
      types: ['Public']
    }));
  
  return [...holidays, ...municipalHolidays];
}

export async function getHolidaysForYear(
  year: number,
  municipality: string,
  cachedHolidays: Record<number, Holiday[]>
): Promise<Holiday[]> {
  if (year in cachedHolidays) {
    return addMunicipalHolidays(cachedHolidays[year], municipality);
  }
  
  const holidays = await fetchNationalHolidays(year);
  return addMunicipalHolidays(holidays, municipality);
}
