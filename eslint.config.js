const eslint = require('@eslint/js');
const prettier = require('eslint-config-prettier');
const react = require('eslint-plugin-react');
const typescript = require('typescript-eslint');

module.exports = [
    {
        ignores: ['dist/**', 'node_modules/**'],
    },
    eslint.configs.recommended,
    ...typescript.configs.recommended,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...react.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'react/no-prop-types': 'off',
            'react/prop-types': 'off',
            'react/no-unknown-property': 'off',
        },
    },
    {
        files: ['*.config.js', '.prettierrc.js'],
        languageOptions: {
            globals: {
                __dirname: 'readonly',
                module: 'readonly',
                require: 'readonly',
            },
        },
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
        },
    },
    {
        files: ['**/*.d.ts'],
        rules: {
            '@typescript-eslint/no-unused-vars': 'off',
        },
    },
    prettier,
];
