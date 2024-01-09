module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // ... alte reguli ...
    'react/prop-types': [
      'warn',
      {
        ignore: ['ignoreThisProp'], // poți ignora unele props
        customValidators: [], // adaugă validatori personalizați dacă este necesar
        skipUndeclared: false, // avertizează pentru props nedeclarate
      },
    ],
  },
};
