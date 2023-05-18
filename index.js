'use strict';

module.exports = {
  extends: [
    'eslint:recommended',
  ],
  env: {
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  plugins: [
    'filenames',
  ],
  rules: {
    camelcase: ['error', { properties: 'never' }],
    semi: 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    indent: ['error', 2, {
      SwitchCase: 1,
    }],
    strict: 'error',
    curly: ['error', 'multi-line'],
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
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'array-bracket-spacing': ['error', 'never'],
    'no-console': 'off',
    'max-len': ['error', {
      code: 120,
      ignoreComments: true,
    }],
    'no-trailing-spaces': 'error',
    'no-multi-spaces': ['error', { exceptions: { Property: false } }],
    'keyword-spacing': 'error',
    'space-before-blocks': 'error',
    'no-unused-vars': ['error', { vars: 'all' }],
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
    'filenames/match-exported': 'error',
  },
};
