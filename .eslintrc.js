module.exports = {
  extends: ['taro', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': ['error', { varsIgnorePattern: 'Taro' }],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-nested-ternary': 'error',
    'wrap-regex': 'error',
    'no-return-assign': ['error', 'always'],
  },
};
