import js from '@eslint/js';
import sveltePlugin from 'eslint-plugin-svelte';
import tsParser from 'typescript-eslint';
import svelteParser from 'svelte-eslint-parser';

export default [
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/.svelte-kit/**', '**/coverage/**']
  },
  js.configs.recommended,
  ...tsParser.configs.recommended,
  ...sveltePlugin.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.svelte'],
    languageOptions: {
      globals: {
        Blob: 'readonly',
        URL: 'readonly',
        document: 'readonly',
        console: 'readonly',
        localStorage: 'readonly',
        setTimeout: 'readonly',
        crypto: 'readonly',
        RTCPeerConnection: 'readonly',
        RTCDataChannel: 'readonly',
        IntersectionObserver: 'readonly',
        ResizeObserver: 'readonly',
        HTMLCanvasElement: 'readonly',
        window: 'readonly',
        fetch: 'readonly',
        Element: 'readonly',
        global: 'readonly',
        Event: 'readonly',
        HTMLElement: 'readonly',
        TextEncoder: 'readonly',
        TextDecoder: 'readonly',
        RTCSessionDescriptionInit: 'readonly',
        RTCIceCandidateInit: 'readonly',
        PointerEvent: 'readonly',
        URLSearchParams: 'readonly'
      }
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-namespace': 'off',
      'no-undef': 'error',
      'svelte/no-at-html-tags': 'off',
      'svelte/valid-compile': 'off'
    }
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser.parser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
      }
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser.parser
      }
    }
  }
];
