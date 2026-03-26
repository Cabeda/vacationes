import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('svelte-i18n', () => ({
  init: vi.fn(),
  register: vi.fn(),
  getLocaleFromNavigator: () => 'pt',
  locale: { subscribe: vi.fn((cb: (lang: string) => void) => { cb('pt'); return () => {}; }) },
  _: vi.fn((key: string) => key),
  __: vi.fn((key: string) => key)
}));

declare global {
  interface Window {
    QRCode: {
      toCanvas: (canvas: HTMLCanvasElement, text: string, options: unknown, callback: (error?: Error) => void) => void;
    };
  }
}

window.QRCode = {
  toCanvas: (_canvas: HTMLCanvasElement, _text: string, _options: unknown, cb: (error?: Error) => void) => {
    cb();
  }
};

class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];
  
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => []);
}

class MockResizeObserver implements ResizeObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

global.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;
global.ResizeObserver = MockResizeObserver as unknown as typeof ResizeObserver;

export {};
