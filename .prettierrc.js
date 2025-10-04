module.exports = {
  // Configuración básica de Prettier
  semi: true, // Punto y coma al final
  trailingComma: 'es5', // Comas finales en objetos y arrays
  singleQuote: true, // Comillas simples en lugar de dobles
  printWidth: 80, // Ancho máximo de línea
  tabWidth: 2, // Espacios por indentación
  useTabs: false, // Usar espacios en lugar de tabs

  // Configuración específica para React Native
  bracketSpacing: true, // Espacios en objetos { foo: bar }
  bracketSameLine: false, // Cerrar > en nueva línea
  arrowParens: 'always', // Paréntesis en arrow functions
  endOfLine: 'lf', // Tipo de salto de línea

  // Configuración para JSX
  jsxSingleQuote: true, // Comillas simples en JSX
  jsxBracketSameLine: false, // > del JSX en nueva línea
};
