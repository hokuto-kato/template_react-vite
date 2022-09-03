module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript'
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		'project': ['./tsconfig.json']
	},
	plugins: [
		'react'
	],
	rules: {
		'@typescript-eslint/indent': ['error', 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		"@typescript-eslint/no-non-null-assertion": "off",
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off"
	}
}
