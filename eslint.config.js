// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*", "node_modules/*", ".expo/*"],
    rules: {
      // Desactivar reglas que pueden entrar en conflicto con Prettier
      'prettier/prettier': 'error',
      'indent': 'off',
      'linebreak-style': 'off',
      'quotes': 'off',
      'semi': 'off',
      'comma-dangle': 'off',
      'max-len': 'off',
      'object-curly-spacing': 'off',
      'array-bracket-spacing': 'off',
      // Reglas específicas para React Native
      'react-native/no-unused-styles': 'warn',
      'react-native/split-platform-components': 'warn',
      'react-native/no-inline-styles': 'off',
      'react-native/no-color-literals': 'off',
    },
    plugins: ['prettier'],
    extends: [
      'plugin:prettier/recommended'
    ]
  }
]);

