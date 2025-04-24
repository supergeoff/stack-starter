import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
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
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unused-vars': 'error', // Upgrade from warn
      '@typescript-eslint/no-explicit-any': 'error', // Upgrade from warn

      // --- Code Style & Consistency ---
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          pathGroups: [
            {
              pattern: 'react*', // Treat react packages as external
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**', // Example for internal aliases
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-cycle': 'error',
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
      complexity: ['warn', 10],
      'max-lines-per-function': ['warn', 50],

      // Add other rules here...
    },
  },
];
