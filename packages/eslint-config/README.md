<div align="center">
<img src="https://imgur.com/xPygSgY.png" align="center" width="10%" alt="">

# @t3ned/eslint-config

**ESLint configuration**

</div>

# Installation

```sh
# npm
> npm i -D @t3ned/eslint-config

# yarn
> yarn add -D @t3ned/eslint-config

# pnpm
> pnpm add -D @t3ned/eslint-config
```

# Usage

Create an `.eslintrc` file:

```json
{
	"extends": "@t3ned/eslint-config"
}
```

And a `tsconfig.eslint.json` file:

```json
{
	"extends": "@t3ned/eslint-config",
	"include": "./src/**/*"
}
```
