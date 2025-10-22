export const env = {
  browser: true,
  es2021: true,
};
export const esLintExtends = [
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:react/jsx-runtime',
];
export const plugins = ['react'];
export const parserOptions = {
  ecmaFeatures: { jsx: true },
  ecmaVersion: 'latest',
  sourceType: 'module',
};
export const settings = {
  react: { version: 'detect' },
};
export const rules = {
  'no-unused-vars': 'warn',
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
};