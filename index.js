var commonRules = {
  'binary-expression-operand-order': true,
  'curly': { options: [ 'ignore-same-line' ] },
  'import-spacing': true,
  'member-access': false,
  'no-irregular-whitespace': true,
  'object-literal-key-quotes': { options: ['as-needed'] },
  'only-arrow-functions': false,
  'quotemark': { options: [ 'single', 'avoid-escape', 'jsx-double' ] },
  'semicolon': { options: 'never' },
  'trailing-comma': {
    options: {
      multiline: {
        arrays: 'always',
        exports: 'always',
        functions: 'ignore',
        imports: 'always',
        objects: 'always',
        typeLiterals: 'ignore'
      },
      singleline: 'never'
    }
  },
  'triple-equals': { options: ['allow-null-check'] },
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
