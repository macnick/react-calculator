/* eslint-disable etc/no-commented-out-code */
const isDev = process.env.NODE_ENV === 'development'

const offIfDevElseError = isDev ? 0 : 2
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    // 'jsx-control-statements/jsx-control-statements': true,
  },
  // extends: ['airbnb', 'plugin:prettier/recommended'],
  extends: [
    'airbnb',
    'prettier' /* , 'plugin:jsx-control-statements/recommended' */,
  ],
  // extends: isDev ? ['airbnb'] : ['airbnb', 'plugin:prettier/recommended'],
  // extends:
  //     isDev && false ? ['airbnb'] : ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
    'jsdoc',
    'eslint-plugin-no-inline-styles',
    'eslint-plugin-testing-library',
    'eslint-plugin-jest-dom',
    'etc',
    'react-hooks',
    // 'no-comments'
    // 'jsx-control-statements',
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'prettier/prettier': 0,
    'no-unused-vars': offIfDevElseError,
    'no-unreachable': offIfDevElseError,
    'arrow-body-style': 1,
    'react/jsx-curly-newline': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-indent-props': 0,
    'import/no-unresolved': 0,
    'react/jsx-indent': 0,
    // 'react/jsx-no-undef': [2, { allowGlobals: true }],
    'react/jsx-fragments': 0,
    'react/jsx-filename-extension': offIfDevElseError,
    'react/jsx-wrap-multilines': 0,
    'react/require-default-props': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-default-export': offIfDevElseError,
    'import/prefer-default-export': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-key': [
      offIfDevElseError,
      {
        checkFragmentShorthand: true,
        warnOnDuplicates: true,
      },
    ],
    'import/order': [
      offIfDevElseError,
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        alphabetize: {
          order:
            'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
      },
    ],
    'react-hooks/rules-of-hooks': offIfDevElseError,
    'react-hooks/exhaustive-deps': offIfDevElseError,
    'react/sort-default-props': offIfDevElseError,
    'react/jsx-sort-props': offIfDevElseError,
    'react/sort-prop-types': offIfDevElseError,
    'react/prop-types': offIfDevElseError,
    'no-debugger': offIfDevElseError,
    'react/no-unused-prop-types': offIfDevElseError,
    'react/forbid-prop-types': offIfDevElseError,
    'no-inline-styles/no-inline-styles': offIfDevElseError,
    'react/jsx-no-useless-fragment': offIfDevElseError,
    'require-await': offIfDevElseError,
    'react/function-component-definition': [
      offIfDevElseError,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    // 'no-comments/disallowComments': offIfDevElseError,
    'etc/no-commented-out-code': offIfDevElseError,
    // 'jsx-control-statements/jsx-choose-not-empty': 1,
    // 'jsx-control-statements/jsx-for-require-each': 1,
    // 'jsx-control-statements/jsx-for-require-of': 1,
    // 'jsx-control-statements/jsx-for-require-body': 1,
    // 'jsx-control-statements/jsx-if-require-condition': 1,
    // 'jsx-control-statements/jsx-otherwise-once-last': 1,
    // 'jsx-control-statements/jsx-use-if-tag': 1,
    // 'jsx-control-statements/jsx-when-require-condition': 1,
    // 'jsx-control-statements/jsx-jcs-no-undef': 1,
    // 'no-undef': 0, // Replace this with jsx-jcs-no-undef
  },
}
