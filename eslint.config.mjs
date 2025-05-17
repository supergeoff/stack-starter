import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist',
      '**/.next',
      '**/.docusaurus',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
      '**/out-tsc',
      '**/test-output',
      '**/*.config.ts',
      '**/*.config.js',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {
      // --- Stricter Typing & Async ---
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unused-vars': 'error', // Upgrade from warn
      '@typescript-eslint/no-explicit-any': 'error', // Upgrade from warn

      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/typedef': [
        'error',
        {
          arrowParameter: true,
          parameter: true,
          propertyDeclaration: true,
          variableDeclaration: true,
        },
      ],

      // --- Code Style & Consistency ---
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        }, // Allow constants and component vars
        { selector: 'function', format: ['camelCase', 'PascalCase'] }, // Allow function components
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        }, // Allow underscore for unused params
        { selector: 'typeLike', format: ['PascalCase'] }, // Classes, interfaces, types, enums
        { selector: 'enumMember', format: ['UPPER_CASE'] },
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: { regex: '^I[A-Z]', match: false }, // Optional: disallow 'I' prefix for interfaces
        },
      ],

      // --- Potential Errors & Complexity ---
      'no-console': 'warn',
      'complexity': ['warn', 10],
      'max-lines-per-function': ['warn', 50],

      'eqeqeq': 'warn',
      'no-else-return': 'warn',
      'prefer-const': 'warn',
      // Add other rules here...
    },
  },
];
