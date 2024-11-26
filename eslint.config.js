import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import tailwindcssPlugin from 'eslint-plugin-tailwindcss';
import parser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parser: parser, // Specify the parser object directly
      parserOptions: {
        ecmaVersion: 2020, // Adjust based on your project's needs
        sourceType: 'module',
      },
    },
    plugins: {
      react: pluginReact,
      '@typescript-eslint': tseslint,
      prettier: eslintPluginPrettier,
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      // Corrected rule for react/jsx-no-bind
      'react/jsx-no-bind': [
        'error',
        {
          ignoreRefs: true,
          allowArrowFunctions: true,
          allowFunctions: false,
          allowBind: false,
          ignoreDOMComponents: false,
        },
      ],
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'always',
          children: 'never',
        },
      ],
      // Add Tailwind CSS linting rules
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'error',
      'tailwindcss/no-contradicting-classname': 'warn',
      // Include rules from core configurations if needed
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      ...eslintPluginPrettier.configs.recommended.rules,
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'es5',
          tabWidth: 2,
          semi: true,
          endOfLine: 'auto',
        },
      ],
    },
    settings: {
      react: {
        version: 'detect', // Automatically detects the React version
      },
    },
  },
];
