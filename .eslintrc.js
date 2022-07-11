module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: [
    '.d.ts',
    'build',
    'temp',
    '!.vscode',
    '!.husky',
    '!.next',
    'coverage',
    'packages-lock.json',
    'yarn.lock',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    semi: ['error', 'never'],
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        quoteProps: 'as-needed',
        bracketSpacing: true,
        trailingComma: 'es5',
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        arrowParens: 'always',
        insertPragma: false,
        requirePragma: false,
        proseWrap: 'never',
        htmlWhitespaceSensitivity: 'strict',
        endOfLine: 'lf',
        rangeStart: 0,
      },
    ],
    'no-use-before-define': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-arrow-callback': 'off',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'no-redeclare': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_|res|next|^err',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_|res|next|^err',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-redeclare': ['error'],
  },
}
