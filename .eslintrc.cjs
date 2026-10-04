module.exports = {
  ignorePatterns: ['dist', 'demo-publish'],
  extends: [
    "airbnb",
    "airbnb-typescript",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['**/*.test.ts', '*.config.ts', 'Demo/**'],
    }],
  },
}
