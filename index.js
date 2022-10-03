// @ts-check

/** @typedef {import("eslint").Linter.BaseConfig} BaseConfig */

/** @type {BaseConfig} */
const config = {
  extends: [
    'standard',
    'plugin:unicorn/recommended',
    'plugin:eslint-comments/recommended'
  ]
}

module.exports = config
