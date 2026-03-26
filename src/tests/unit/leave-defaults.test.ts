import { describe, it, expect } from 'vitest';
import { DEFAULT_LEAVE_TYPES, PORTUGAL_MUNICIPALITIES } from '$lib/leave-defaults';

describe('leave-defaults', () => {
  describe('DEFAULT_LEAVE_TYPES', () => {
    it('should have required leave types', () => {
      const ids = DEFAULT_LEAVE_TYPES.map(lt => lt.id);
      
      expect(ids).toContain('ferias');
      expect(ids).toContain('flex');
      expect(ids).toContain('casamento');
      expect(ids).toContain('luto');
      expect(ids).toContain('baixa');
      expect(ids).toContain('meio-dia');
      expect(ids).toContain('parental');
    });
    
    it('should have valid PT and EN names', () => {
      for (const lt of DEFAULT_LEAVE_TYPES) {
        expect(lt.name.pt).toBeTruthy();
        expect(lt.name.en).toBeTruthy();
        expect(typeof lt.name.pt).toBe('string');
        expect(typeof lt.name.en).toBe('string');
      }
    });
    
    it('should have valid colors', () => {
      for (const lt of DEFAULT_LEAVE_TYPES) {
        expect(lt.color).toMatch(/^#[0-9A-Fa-f]{6}$/);
      }
    });
    
    it('should have valid icons', () => {
      for (const lt of DEFAULT_LEAVE_TYPES) {
        expect(lt.icon).toBeTruthy();
        expect(lt.icon.length).toBeGreaterThan(0);
      }
    });
    
    it('should have unique IDs', () => {
      const ids = DEFAULT_LEAVE_TYPES.map(lt => lt.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });
    
    it('should have ordered types', () => {
      for (let i = 0; i < DEFAULT_LEAVE_TYPES.length; i++) {
        expect(DEFAULT_LEAVE_TYPES[i].order).toBe(i + 1);
      }
    });
    
    it('should mark default types correctly', () => {
      for (const lt of DEFAULT_LEAVE_TYPES) {
        expect(lt.isDefault).toBe(true);
      }
    });
    
    it('should have correct vacation days', () => {
      const ferias = DEFAULT_LEAVE_TYPES.find(lt => lt.id === 'ferias');
      expect(ferias?.annualAllowance).toBe(22);
    });
    
    it('should have correct wedding days', () => {
      const casamento = DEFAULT_LEAVE_TYPES.find(lt => lt.id === 'casamento');
      expect(casamento?.annualAllowance).toBe(15);
    });
    
    it('should have correct bereavement days', () => {
      const luto = DEFAULT_LEAVE_TYPES.find(lt => lt.id === 'luto');
      expect(luto?.annualAllowance).toBe(5);
    });
    
    it('should have meio-dia deduct from ferias', () => {
      const meioDia = DEFAULT_LEAVE_TYPES.find(lt => lt.id === 'meio-dia');
      expect(meioDia?.deductsFrom).toBe('ferias');
    });
  });
  
  describe('PORTUGAL_MUNICIPALITIES', () => {
    it('should contain major cities', () => {
      expect(PORTUGAL_MUNICIPALITIES).toContain('Lisboa');
      expect(PORTUGAL_MUNICIPALITIES).toContain('Porto');
    });
    
    it('should have unique municipalities', () => {
      const unique = new Set(PORTUGAL_MUNICIPALITIES);
      expect(unique.size).toBeGreaterThan(150);
    });
    
    it('should have a reasonable number of municipalities', () => {
      expect(PORTUGAL_MUNICIPALITIES.length).toBeGreaterThan(100);
    });
  });
});
