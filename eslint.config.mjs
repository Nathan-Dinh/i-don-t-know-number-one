import globals from 'globals';
import pluginJs from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // ESLint config for JavaScript
  pluginJs.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: tsParser,
      globals: globals.node,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
      react: pluginReact,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn', // Avoid `any` type
      '@typescript-eslint/explicit-module-boundary-types': 'error', // Explicit return types
      '@typescript-eslint/consistent-type-imports': 'error', // Enforce type imports
    },
  },

  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      indent: ['error', 2], // 2 spaces for indentation
      quotes: ['error', 'single'], // Enforce single quotes
      semi: ['error', 'always'], // Always require semicolons
      'no-unused-vars': 'warn', // Warn about unused variables
      'no-console': 'warn', // Warn about console usage
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'all',
          tabWidth: 2, // Adjust tab width to a reasonable value
          printWidth: 80,
          endOfLine: 'auto',
        },
      ],
      'prefer-const': 'error', // Prefer `const`
      'no-var': 'error', // Disallow `var`
    },
  },
];
