export const eslintConfig = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		project: "./tsconfig.eslint.json",
	},
	env: {
		node: true,
		es2020: true,
		jest: true,
	},
	extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
	rules: {
		quotes: ["error", "double"],
		semi: ["error", "always"],
		complexity: "warn",
		camelcase: "off",
		yoda: "error",
		"accessor-pairs": "warn",
		"max-len": ["error", 110, 2],
		"eol-last": "error",
		"prettier/prettier": [2, { useTabs: true }],
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/no-explicit-any": "error",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/ban-ts-comment": "warn",
		"@typescript-eslint/prefer-nullish-coalescing": "error",
		"@typescript-eslint/no-namespace": "off",
	},
};

module.exports = eslintConfig;
export default eslintConfig;
