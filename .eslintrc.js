// @ts-check

/** @typedef {import("eslint").Linter.BaseConfig } BaseConfig */

/** @type {BaseConfig} */
const config = {
  extends: './index.js',
  rules: {
    'unicorn/prefer-module': 'off'
  }
}

module.exports = config
