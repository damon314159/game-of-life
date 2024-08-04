module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "prettier"
  ],
  plugins: [
    'unicorn',
    'react',
    'sort-exports',
  ],
  rules: {
    'arrow-body-style': 'error',
    'prefer-arrow-callback': 'error',
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
    'no-bitwise':'off',
    'no-console':'off'
  },
  parserOptions: {
    ecmaVersion: 2022,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module",
  }
}