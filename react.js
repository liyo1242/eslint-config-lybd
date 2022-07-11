module.exports = {
  parser: '@typescript-eslint/parser',
  globals: {
    React: true,
    JSX: true,
  },
  extends: ['plugin:react/recommended', './.eslintrc.js'],
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
