// eslint.config.mjs
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'; // Import plugin
import { defineConfig } from 'eslint-define-config';
import reactPlugin from 'eslint-plugin-react'; // Import React plugin
import reactHooksPlugin from 'eslint-plugin-react-hooks'; // Import React Hooks plugin


export default defineConfig([
  {
    files: ['*.ts', '*.tsx'], // Glob to match TypeScript files
    languageOptions: {
      parser: '@typescript-eslint/parser', // Use TypeScript parser
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX support
        },
        ecmaVersion: 2021, // Use ECMAScript 2021 features
        sourceType: 'module', // Use ES Modules
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin, // Define plugin as an object
      react: reactPlugin, // Use the imported react plugin
      'react-hooks': reactHooksPlugin, // Use the imported react-hooks plugin
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn', // Warn for unused variables
      '@typescript-eslint/no-explicit-any': 'off', // Allow 'any' type (adjust as needed)
      'react/react-in-jsx-scope': 'off', // React JSX scope not required in newer versions
      'react/display-name': 'off', // Disable display name rule for React components
    },
  },
  {
    files: ['*.js'], // Example for JavaScript files
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      react: ('eslint-plugin-react'), // Include React plugin for JavaScript
    },
    rules: {
      'no-console': 'warn', // Example rule for JavaScript files
    },
  },
]);
