import js from '@eslint/js';
import sveltePlugin from 'eslint-plugin-svelte';
import tsParser from 'typescript-eslint';
import svelteParser from 'svelte-eslint-parser';
import importPlugin from 'eslint-plugin-import';

const e = 2;
const w = 1;
const off = 0;

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.svelte-kit/**',
      '**/coverage/**',
      '**/.vercel/**'
    ]
  },
  js.configs.recommended,
  ...tsParser.configs.recommended,
  ...sveltePlugin.configs['flat/recommended'],

  // ─── TypeScript (type-aware, .ts files only) ─────────────────────────────
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser.parser,
      parserOptions: { ecmaVersion: 2022, sourceType: 'module', project: './tsconfig.json' }
    },
    rules: {
      '@typescript-eslint/await-thenable': e,
      '@typescript-eslint/no-floating-promises': [e, { ignoreVoid: true }],
      '@typescript-eslint/no-misused-promises': [e, {
        checksConditionals: true,
        checksVoidReturn: true
      }],
      '@typescript-eslint/no-unnecessary-condition': [e, { allowConstantLoopConditions: true }],
      '@typescript-eslint/no-unsafe-assignment': e,
      '@typescript-eslint/no-unsafe-call': e,
      '@typescript-eslint/no-unsafe-member-access': e,
      '@typescript-eslint/no-unsafe-return': e,
      '@typescript-eslint/consistent-type-imports': [e, { prefer: 'type-imports' }],
      '@typescript-eslint/consistent-type-exports': e,
      '@typescript-eslint/consistent-return': e,
    }
  },

  // ─── TypeScript (non-type-aware, .ts files) ──────────────────────────────
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': e,
      '@typescript-eslint/no-unused-vars': [e, {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }],
      '@typescript-eslint/no-non-null-assertion': w,
      '@typescript-eslint/no-namespace': off,
      '@typescript-eslint/ban-ts-comment': [e, {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': false,
        'ts-nocheck': false
      }],
      '@typescript-eslint/consistent-generic-constructors': [e, 'constructor'],
      '@typescript-eslint/consistent-indexed-object-style': [e, 'record'],
      '@typescript-eslint/no-redundant-type-constituents': e,
      '@typescript-eslint/no-useless-constructor': e,
      '@typescript-eslint/prefer-for-of': e,
      '@typescript-eslint/prefer-function-type': e,
      '@typescript-eslint/prefer-optional-chain': e,
      '@typescript-eslint/prefer-string-starts-ends-with': e,
      '@typescript-eslint/require-await': e,
      '@typescript-eslint/triple-slash-reference': off,
      '@typescript-eslint/unified-signatures': w,
    }
  },

  // ─── Svelte ───────────────────────────────────────────────────────────────
  {
    files: ['**/*.svelte'],
    plugins: { svelte: sveltePlugin },
    rules: {
      // Svelte component best practices
      'svelte/button-has-type': off,
      'svelte/require-stores-init': e,
      'svelte/no-dynamic-slot-name': e,
      'svelte/no-goto-without-base': e,
      'svelte/no-inspect': e,
      'svelte/no-svelte-internal': e,
      'svelte/no-target-blank': e,
      'svelte/no-unknown-style-directive-property': e,
      'svelte/valid-compile': off,
      'svelte/no-at-html-tags': off,
      'svelte/no-at-debug-tags': off,

      // Style & formatting
      'svelte/shorthand-attribute': [w, { prefer: 'always' }],
      'svelte/shorthand-directive': [w, { prefer: 'always' }],
      'svelte/html-quotes': [e, { prefer: 'double' }],
      'svelte/html-self-closing': [e, { void: 'always', normal: 'never', foreign: 'ignore', component: 'ignore', svelte: 'ignore' }],
      'svelte/mustache-spacing': off,
      'svelte/no-spaces-around-equal-signs-in-attribute': e,
      'svelte/indent': off,
      'svelte/first-attribute-linebreak': [w, { multiline: 'below' }],
      'svelte/html-closing-bracket-spacing': [w, { selfClosingTag: 'always' }],
      'svelte/block-lang': off,
      'svelte/max-attributes-per-line': off,
      'svelte/spaced-html-comment': [e, 'always'],

      // Reactive / store
      'svelte/require-store-callbacks-use-set-param': e,
      'svelte/require-store-reactive-access': e,
      'svelte/no-reactive-reassign': [e, { props: false }],
      'svelte/no-immutable-reactive-statements': e,
      'svelte/derived-has-same-inputs-outputs': e,
      'svelte/no-extra-reactive-curlies': w,
      'svelte/no-reactive-functions': e,
      'svelte/no-reactive-literals': e,
      'svelte/require-each-key': off,
      'svelte/valid-each-key': e,

      // Destructuring
      'svelte/prefer-destructured-store-props': e,
      'svelte/prefer-style-directive': e,
      'svelte/prefer-class-directive': e,

      // No-op
      'svelte/system': off,
    }
  },

  // ─── JavaScript ───────────────────────────────────────────────────────────
  {
    files: ['**/*.ts', '**/*.js', '**/*.svelte'],
    rules: {
      'no-console': [e, { allow: ['warn', 'error'] }],
      'no-debugger': e,
      'prefer-const': e,
      'no-var': e,
      'eqeqeq': [e, 'always'],
      'curly': [e, 'all'],
      'default-case': e,
      'default-case-last': e,
      'dot-notation': [e, { allowKeywords: true }],
      'no-empty-function': [e, { allow: ['arrowFunctions', 'functions', 'methods'] }],
      'no-eval': e,
      'no-lone-blocks': e,
      'no-loop-func': e,
      'no-multi-str': w,
      'no-new-wrappers': e,
      'no-proto': e,
      'no-redeclare': e,
      'no-return-await': e,
      'no-script-url': e,
      'no-self-compare': e,
      'no-throw-literal': e,
      'no-unused-expressions': [e, {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }],
      'no-with': e,
      'prefer-arrow-callback': [e, { allowNamedFunctions: false }],
      'prefer-object-spread': e,
      'prefer-promise-reject-errors': [e, { allowEmptyReject: false }],
      'prefer-template': e,
      'yoda': e,
    }
  },

  // ─── Import ───────────────────────────────────────────────────────────────
  {
    files: ['**/*.ts', '**/*.svelte'],
    plugins: { import: importPlugin },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true
        }
      }
    },
    rules: {
      'import/no-unresolved': [e, { caseSensitive: false }],
      'import/named': e,
      'import/default': e,
      'import/export': e,
      'import/no-duplicates': [e, { 'prefer-inline': true }],
      'import/order': [e, {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          { pattern: '$lib/**', group: 'internal', position: 'before' },
          { pattern: '$components/**', group: 'internal', position: 'before' },
          { pattern: '$i18n/**', group: 'internal', position: 'before' },
          { pattern: '@/**', group: 'internal', position: 'before' },
          { pattern: 'svelte', group: 'external' },
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always'
      }],
      'import/no-cycle': [e, { maxDepth: 2 }],
      'import/no-self-import': e,
      'import/no-useless-path-segments': [e, { commonjs: true }],
      'import/newline-after-import': [e, { count: 1 }],
      'import/no-named-as-default': e,
      'import/no-anonymous-default-export': [e, {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: false
      }],
    }
  },

  // ─── Performance ──────────────────────────────────────────────────────────
  {
    files: ['**/*.ts', '**/*.svelte'],
    rules: {
      'max-depth': [w, 4],
      'max-lines-per-function': [w, { max: 150, skipBlankLines: true, skipComments: true }],
      'max-params': [w, 5],
      'max-statements': [w, 50],
      'no-restricted-syntax': [e, {
        selector: 'CallExpression[callee.name="forEach"]',
        message: 'forEach is discouraged. Use for…of or .map/.filter with a reason.'
      }],
      'complexity': [w, 20],
      'max-nested-callbacks': [w, 3],
    }
  },

  // ─── Globals ───────────────────────────────────────────────────────────────
  {
    files: ['**/*.ts', '**/*.svelte'],
    languageOptions: {
      globals: {
        Blob: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        document: 'readonly',
        console: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        crypto: 'readonly',
        RTCPeerConnection: 'readonly',
        RTCDataChannel: 'readonly',
        RTCSessionDescriptionInit: 'readonly',
        RTCIceCandidateInit: 'readonly',
        IntersectionObserver: 'readonly',
        ResizeObserver: 'readonly',
        HTMLCanvasElement: 'readonly',
        Element: 'readonly',
        Event: 'readonly',
        HTMLElement: 'readonly',
        TextEncoder: 'readonly',
        TextDecoder: 'readonly',
        PointerEvent: 'readonly',
        CustomEvent: 'readonly',
        MutationObserver: 'readonly',
        navigator: 'readonly',
        window: 'readonly',
        fetch: 'readonly',
        globalThis: 'readonly',
        WebSocket: 'readonly',
        Worker: 'readonly',
        performance: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        global: 'readonly',
      }
    },
    rules: {
      'no-undef': e,
      'no-restricted-globals': [e,
        'isNaN', 'isFinite', 'parseInt', 'parseFloat', 'Escape',
        'unescape', 'eval', 'alert', 'confirm', 'prompt', 'close', 'open'
      ]
    }
  },

  // ─── Test files (relaxed rules) ─────────────────────────────────────────
  {
    files: ['src/tests/**/*.ts', 'src/tests/**/*.svelte'],
    rules: {
      '@typescript-eslint/no-explicit-any': off,
      '@typescript-eslint/no-unused-vars': off,
      '@typescript-eslint/no-unsafe-return': off,
      '@typescript-eslint/no-unsafe-assignment': off,
      '@typescript-eslint/no-unsafe-call': off,
      '@typescript-eslint/no-unsafe-member-access': off,
      '@typescript-eslint/no-misused-promises': off,
      '@typescript-eslint/no-floating-promises': off,
      '@typescript-eslint/no-unnecessary-condition': off,
      'no-console': off,
      'max-lines-per-function': off,
      'max-nested-callbacks': off,
      'svelte/button-has-type': off,
      'svelte/require-each-key': off,
      'svelte/no-at-html-tags': off,
    }
  },

  // ─── Parsers ──────────────────────────────────────────────────────────────
  {
    files: ['**/*.ts'],
    ignores: ['**/node_modules/**'],
    languageOptions: {
      parser: tsParser.parser,
      parserOptions: { ecmaVersion: 2022, sourceType: 'module' }
    }
  },
  {
    files: ['**/*.svelte'],
    ignores: ['**/node_modules/**'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: { parser: tsParser.parser }
    }
  }
];
