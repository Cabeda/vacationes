import { describe, it, expect } from 'vitest';
import {
  isMunicipalHoliday,
  getMunicipalHolidays,
  addMunicipalHolidays
} from '$lib/holidays';
import type { Holiday } from '$lib/types';

describe('holidays', () => {
  describe('getMunicipalHolidays', () => {
    it('should return municipal holidays for Lisboa', () => {
      const holidays = getMunicipalHolidays();
      const lisboaHolidays = holidays.filter(h => h.municipality === 'Lisboa');
      expect(lisboaHolidays.length).toBeGreaterThan(0);
      expect(lisboaHolidays.every(h => h.municipality === 'Lisboa')).toBe(true);
    });

    it('should return municipal holidays for Porto', () => {
      const holidays = getMunicipalHolidays();
      const portoHolidays = holidays.filter(h => h.municipality === 'Porto');
      expect(portoHolidays.length).toBeGreaterThan(0);
      expect(portoHolidays.every(h => h.municipality === 'Porto')).toBe(true);
    });

    it('should include date, municipality, and name for each holiday', () => {
      const holidays = getMunicipalHolidays();
      holidays.forEach(h => {
        expect(h.date).toBeDefined();
        expect(h.municipality).toBeDefined();
        expect(h.name).toBeDefined();
      });
    });
  });

  describe('isMunicipalHoliday', () => {
    it('should return true for Lisboa holiday on correct date', () => {
      expect(isMunicipalHoliday('2024-06-13', 'Lisboa')).toBe(true);
    });

    it('should return false for Lisboa on Porto holiday', () => {
      expect(isMunicipalHoliday('2024-06-24', 'Lisboa')).toBe(false);
    });

    it('should return false for non-existent municipality', () => {
      expect(isMunicipalHoliday('2024-06-13', 'NonExistent')).toBe(false);
    });

    it('should return false for wrong date', () => {
      expect(isMunicipalHoliday('2024-06-14', 'Lisboa')).toBe(false);
    });
  });

  describe('addMunicipalHolidays', () => {
    const baseHolidays: Holiday[] = [
      {
        date: '2024-01-01',
        localName: 'Ano Novo',
        name: 'New Year',
        countryCode: 'PT',
        fixed: true,
        global: true,
        counties: null,
        launchYear: null,
        types: ['Public']
      }
    ];

    it('should add Lisboa municipal holidays to national holidays', () => {
      const result = addMunicipalHolidays(baseHolidays, 'Lisboa');
      expect(result.length).toBe(2);
      expect(result[1].localName).toBe('Santo António');
      expect(result[1].counties).toEqual(['Lisboa']);
    });

    it('should add Porto municipal holidays to national holidays', () => {
      const result = addMunicipalHolidays(baseHolidays, 'Porto');
      expect(result.length).toBe(3);
      const portoHolidays = result.filter(h => h.counties?.includes('Porto'));
      expect(portoHolidays.length).toBe(2);
    });

    it('should not duplicate municipal holidays for wrong municipality', () => {
      const result = addMunicipalHolidays(baseHolidays, 'Faro');
      expect(result.length).toBe(1);
    });

    it('should handle empty national holidays array', () => {
      const result = addMunicipalHolidays([], 'Lisboa');
      expect(result.length).toBeGreaterThan(0);
    });

    it('should set correct properties on municipal holidays', () => {
      const result = addMunicipalHolidays([], 'Lisboa');
      const municipal = result[0];
      expect(municipal.countryCode).toBe('PT');
      expect(municipal.fixed).toBe(true);
      expect(municipal.global).toBe(false);
      expect(municipal.launchYear).toBeNull();
      expect(municipal.types).toEqual(['Public']);
    });
  });
});
