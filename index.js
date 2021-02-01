'use strict';

module.exports = {
  extends: [
    'eslint:recommended',
  ],
  env: {
    es2017: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    camelcase: ['error', { properties: 'never' }],
    semi: 'error',
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
    'quote-props': ['error', 'as-needed'],
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'no-console': 'off',
    'max-len': ['error', 120],
    'no-trailing-spaces': 'error',
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
  },
};
