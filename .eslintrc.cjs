module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"plugin:svelte/recommended",
		// If you use TS:
		"plugin:@typescript-eslint/recommended"
	],
	parser: "svelte-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
		extraFileExtensions: [".svelte"],
		sourceType: "module"
	},
	overrides: [
		{
			files: ["*.svelte"],
			rules: {
				// This is the one that often triggers "missing-declaration" on transition directives
				"no-undef": "off",

				// If you still get unused-vars warnings for transitions:
				"@typescript-eslint/no-unused-vars": "off"
			}
		}
	]
};
