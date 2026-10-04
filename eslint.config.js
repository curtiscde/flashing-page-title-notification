import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { importX } from 'eslint-plugin-import-x';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // site/ has its own config that extends this one
  { ignores: ['dist', 'site'] },
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
    arrowParens: true,
    braceStyle: '1tbs',
    commaDangle: 'always-multiline',
  }),
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.js'],
        },
      },
    },
    plugins: { 'import-x': importX },
    rules: {
      'import-x/no-extraneous-dependencies': ['error', {
        devDependencies: ['**/*.test.ts', '**/*.config.{ts,js,mjs}'],
      }],
    },
  },
);
