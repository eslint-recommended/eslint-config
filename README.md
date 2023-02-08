[![npm version](https://badge.fury.io/js/%40eslint-recommended%2Feslint-config.svg)](https://badge.fury.io/js/%40eslint-recommended%2Feslint-config)
[![lint](https://github.com/eslint-recommended/eslint-config/actions/workflows/lint.yml/badge.svg)](https://github.com/eslint-recommended/eslint-config/actions/workflows/lint.yml)

# @eslint-recommended/eslint-config

Recommended ESLint Shareable Config for JavaScript

## Overview

`@eslint-recommended/eslint-config` is using following configurations and plugins.

- [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
- [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)

## Installation

Install `@eslint-recommended/eslint-config`.

```sh
npm i -D @eslint-recommended/eslint-config
```

## Usage

Add `@eslint-recommended` to `extends` of your ESLint config.

```json
{
  "extends": [
    "@eslint-recommended"
  ]
}
```
