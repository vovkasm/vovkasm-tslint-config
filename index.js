var commonRules = {
  'binary-expression-operand-order': true,
  'curly': {
    options: [ 'ignore-same-line' ],
  },
  'import-spacing': true,
  'member-access': false,
  'no-irregular-whitespace': true,
  'only-arrow-functions': false,
  'quotemark': {
    options: [ 'single', 'avoid-escape' ],
  },
  'semicolon': { options: 'never' },
  'space-before-function-paren': {
    options: {
        anonymous: 'always',
        asyncArrow: 'always',
        constructor: 'always',
        method: 'always',
        named: 'always',
    },
  },
  'triple-equals': {
    options: ['allow-null-check'],
  },
  'variable-name': {
    options: [
        'ban-keywords',
        'check-format',
        'allow-leading-underscore',
        'allow-pascal-case',
    ],
  },
  'whitespace': {
    options: ['check-decl', 'check-module', 'check-separator']
  },
}

var tsRules = {

}

var config = {
  extends: ['tslint:recommended'],
  jsRules: Object.assign({}, commonRules),
  rules: Object.assign({}, commonRules, tsRules),
}

module.exports = config
