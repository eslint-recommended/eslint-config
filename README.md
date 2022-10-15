[![npm version](https://badge.fury.io/js/%40eslint-recommended%2Feslint-config.svg)](https://badge.fury.io/js/%40eslint-recommended%2Feslint-config)
[![lint](https://github.com/eslint-recommended/eslint-config/actions/workflows/lint.yml/badge.svg)](https://github.com/eslint-recommended/eslint-config/actions/workflows/lint.yml)

# @eslint-recommended/eslint-config

Recommended ESLint Shareable Config for JavaScript

## Overview

`@eslint-recommended/eslint-config` is using following configurations and plugins.

- [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)
- [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)

## Peer dependencies

- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)
- [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)
- [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n)
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)

## Usage

### Install packages

#### npm@>=7

Install `@eslint-recommended/eslint-config`.

```sh
npm i -D @eslint-recommended/eslint-config
```

#### npm@<7

Install `@eslint-recommended/eslint-config` and its peer dependencies.

```sh
npm i -D \
  eslint \
  eslint-config-standard \
  eslint-plugin-eslint-comments \
  eslint-plugin-import \
  eslint-plugin-jsdoc \
  eslint-plugin-n \
  eslint-plugin-promise \
  eslint-plugin-unicorn \
  @eslint-recommended/eslint-config
```

### Use in ESLint config

Add `@eslint-recommended` to `extends` of your ESLint config.

```json
{
  "extends": [
    "@eslint-recommended"
  ]
}
```
