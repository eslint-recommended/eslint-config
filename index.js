// @ts-check

/** @typedef {import('eslint').ESLint.ConfigData} ConfigData */

/**
 * @type {ConfigData}
 * @see https://eslint.org/docs/latest/use/configure/configuration-files-deprecated
 */
const config = {
  extends: [
    'standard',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:@eslint-community/eslint-comments/recommended',
    'plugin:jsdoc/recommended',
    'plugin:regexp/recommended'
  ],
  rules: {
    // Disable because it conflicts with eslint-plugin-regexp.
    'unicorn/better-regex': 'off'
  }
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = config
