'use strict';

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  plugins: ['import'],
  rules: {
    eqeqeq: ['error', 'always'],
    'no-loop-func': ['error'],
    'no-self-compare': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-useless-concat': ['error'],
    curly: ['error', 'multi-line', 'consistent'],
    'consistent-return': ['error'],
    'no-return-await': ['error'],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error'],
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],
    'no-useless-computed-key': ['error'],
    'no-useless-rename': ['error'],
    'no-var': ['error'],
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': ['error'],
    'prefer-const': ['error'],
    'prefer-numeric-literals': ['error'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'rest-spread-spacing': ['error', 'never'],
    'template-curly-spacing': ['error', 'never'],
    'handle-callback-err': ['error', '^.*(e|E)rr'],
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
      },
    ],
    'no-console': ['off'],
    'no-constant-condition': [
      'error',
      {
        checkLoops: false,
      },
    ],
    'no-return-assign': ['error'],
    strict: ['error', 'global'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: {
          let: 2,
          const: 3,
        },
        MemberExpression: 1,
      },
    ],
    'block-spacing': ['error', 'always'],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    camelcase: ['error'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': ['error', 'last'],
    'eol-last': ['error'],
    'func-call-spacing': ['error', 'never'],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'minimum',
      },
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          function: {
            after: false,
          },
        },
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'max-len': [
      'error',
      {
        code: 80,
        ignoreUrls: true,
      },
    ],
    'max-nested-callbacks': [
      'error',
      {
        max: 5,
      },
    ],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
        properties: true,
      },
    ],
    'new-parens': ['error'],
    'no-lonely-if': ['error'],
    'no-trailing-spaces': ['error'],
    'no-unneeded-ternary': ['error'],
    'no-whitespace-before-property': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    semi: ['error', 'always'],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error'],
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {
          typeof: false,
        },
      },
    ],
    'no-extra-parens': [
      'error',
      'all',
      {
        returnAssign: false,
        nestedBinaryExpressions: false,
        enforceForArrowConditionals: false,
      },
    ],
    'no-shadow-restricted-names': ['error'],
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
};
