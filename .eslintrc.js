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
    'no-nested-ternary': 'error',
    'wrap-regex': 'error',
    'no-return-assign': ['error', 'always'],
    //禁止出现重复的键
    'no-dupe-keys': 'error',
    //禁止导入重复模块
    'no-duplicate-imports': 'error',
    //jsx中使用单引号
    'jsx-quotes': ['error', 'prefer-double'],
    //this别名
    'consistent-this': ['error', '_this'],
  },
};
