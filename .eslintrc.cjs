module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:require-extensions/recommended',
    'prettier',
  ],
  plugins: [
    'unicorn',
    'sort-exports',
    'require-extensions',
  ],
  rules: {
    'arrow-body-style': 'error',
    'prefer-arrow-callback': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      { ts: 'never', cts: 'never', mts: 'never', tsx: 'never' },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['*.config.{js,cjs,mjs,ts,cts,mts}'],
        optionalDependencies: false,
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      },
    ],
    'sort-imports': [
      'error',
      { allowSeparatedGroups: true, ignoreDeclarationSort: true },
    ],
    'sort-exports/sort-exports': ['error', { sortDir: 'asc' }],
    'sort-keys': 'error',
    'sort-vars': 'error',
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', 'unix'],
    'unicorn/prefer-node-protocol': 'error',
    'no-param-reassign': ['error', { props: false }],
  },
}