module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['vue'],
  extends: ['plugin:vue/vue3-recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    // ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'vue/html-closing-bracket-newline': ['warn', {
      'singleline': 'never',
      'multiline': 'never',
    }],
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-self-closing': ['warn', {
      'html': { normal: 'never', component: 'always' },
    }],
    'vue/max-attributes-per-line': ['warn', {
      'singleline': 3,
      'multiline': {
        'max': 1,
      },
    }],
    'vue/script-indent': ['warn', 2, { 'baseIndent': 1 }],
    'vue/component-name-in-template-casing': ['warn', 'kebab-case', {
      'registeredComponentsOnly': false,
    }],

    'brace-style': 'warn', // [1tbs default, stroustrup, allman]
    'comma-dangle': ['warn', 'always-multiline'],
    'indent': ['warn', 2],
    'no-unused-vars': 'warn',
    'quotes': ['warn', 'single', { avoidEscape: true }],
    'semi': ['warn', 'never'],

    'array-bracket-spacing': ['warn', 'never'],
    'comma-spacing': ['warn', { before: false, after: true }],
    'key-spacing': ['warn'],
    'keyword-spacing': ['warn'],
    'no-multi-spaces': ['warn'],
    'no-trailing-spaces': ['warn'],
    'object-curly-spacing': ['warn', 'always'],
    'space-before-function-paren': ['warn', 'always'],
    'space-before-blocks': 'warn',
    'space-infix-ops': ['warn'],
    'space-in-parens': ['warn', 'never'],
  },
  overrides: [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off',
      },
    },
  ],
}
