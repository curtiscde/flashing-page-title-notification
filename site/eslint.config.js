import reactHooks from 'eslint-plugin-react-hooks';
import base from '../eslint.config.js';

export default [
  { ignores: ['.next', 'out', 'next-env.d.ts'] },
  ...base,
  reactHooks.configs.flat.recommended,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        projectService: {
          allowDefaultProject: ['eslint.config.js', 'postcss.config.mjs'],
        },
      },
    },
    rules: {
      // A private, statically exported site: the dependencies/devDependencies split means nothing here
      'import-x/no-extraneous-dependencies': 'off',
    },
  },
];
