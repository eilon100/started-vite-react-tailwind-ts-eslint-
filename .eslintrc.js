module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    '@typescript-eslint',
    'simple-import-sort',
    'tailwindcss'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react-hooks/recommended',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    'plugin:tailwindcss/recommended'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'tailwindcss/classnames-order': 'off',
    'tailwindcss/no-contradicting-classname': 'error',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off'
  }
}
