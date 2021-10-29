module.exports = {
  env: {
    es6: true,
  },
  // extends: ['airbnb', 'prettier', 'prettier/react'],
  extends: [
    'eslint:recommended',
    'plugin:jsx-control-statements/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'jsx-control-statements'],
  // plugins: ['react', 'prettier'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@/', './src/']],
      },
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'prettier/prettier': 'error',
    semi: ['error', 'never'],
    'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx'] }],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'off',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
  },
}
