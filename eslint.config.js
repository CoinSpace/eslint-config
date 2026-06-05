import globals from 'globals';
import js from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [{
  languageOptions: {
    ecmaVersion: 2025,
    sourceType: 'module',
    globals: {
      ...globals.es2025,
    },
  },
  rules: {
    ...js.configs.recommended.rules,
    camelcase: ['error', {
      properties: 'never',
    }],
    semi: 'error',
    quotes: ['error', 'single', {
      avoidEscape: true,
    }],
    indent: ['error', 2, {
      SwitchCase: 1,
    }],
    strict: 'error',
    curly: ['error', 'multi-line'],
    eqeqeq: ['error', 'always'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    'key-spacing': 'error',
    'quote-props': ['error', 'as-needed'],
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error',
    'brace-style': ['error', '1tbs', {
      allowSingleLine: true,
    }],
    'array-bracket-spacing': ['error', 'never'],
    'no-console': 'off',
    'max-len': ['error', {
      code: 120,
      ignoreComments: true,
    }],
    'no-trailing-spaces': 'error',
    'no-multi-spaces': ['error', {
      exceptions: {
        Property: false,
      },
    }],
    'keyword-spacing': 'error',
    'space-infix-ops': ['error', { int32Hint: true }],
    'space-before-blocks': 'error',
    'no-unused-vars': ['error', {
      vars: 'all',
    }],
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-destructuring': ['error', {
      object: true,
      array: false,
    }],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'sort-imports': ['error', {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
      allowSeparatedGroups: true,
    }],
  },
}];

/** @type {import('eslint').Linter.Config[]} */
export const node = [{
  languageOptions: {
    globals: {
      ...globals.es2025,
      ...globals.nodeBuiltin,
    },
  },
}];

/** @type {import('eslint').Linter.Config[]} */
export const browser = [{
  languageOptions: {
    globals: {
      ...globals.es2025,
      ...globals.browser,
    },
  },
}];

/** @type {import('eslint').Linter.Config[]} */
export const mocha = [{
  languageOptions: {
    globals: {
      ...globals.es2025,
      ...globals.mocha,
    },
  },
}];
