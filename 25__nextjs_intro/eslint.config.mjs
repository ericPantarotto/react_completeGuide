import pluginJs from '@eslint/js';
import pluginNext from '@next/eslint-plugin-next';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    plugins: {
      '@next/next': pluginNext,
      react: pluginReact,
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      '@next/next/no-img-element': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'error',
      'no-undef': 'warn',
    },
  },
];
