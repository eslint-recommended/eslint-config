[![npm version](https://badge.fury.io/js/@eslint-recommended/eslint-config.svg)](https://badge.fury.io/js/@eslint-recommended/eslint-config)
[![eslint](https://github.com/eslint-recommended/eslint-config/actions/workflows/eslint.yml/badge.svg)](https://github.com/eslint-recommended/eslint-config/actions/workflows/eslint.yml)

# @eslint-recommended/eslint-config

Recommended ESLint Shareable Config for JavaScript

## Peer dependencies

- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)
- [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
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
