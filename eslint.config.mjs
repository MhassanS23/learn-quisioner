import eslintPluginReact from 'eslint-plugin-react';
import js from '@eslint/js';

export default [
  js.configs.recommended, // Menggunakan eslint:recommended
  {
    files: ['**/*.{js,jsx}'], // Berlaku untuk file JavaScript/JSX
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      react: eslintPluginReact, // Menambahkan plugin react
    },
    settings: {
      react: {
        version: 'detect', // Deteksi versi React secara otomatis
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'indent': ['error', 4], // Mengatur indentasi ke 4 spasi
      'quotes': ['error', 'single'], // Gunakan single quotes
      'semi': ['error', 'always'], // Tambahkan titik koma di akhir
    },
  },
];
