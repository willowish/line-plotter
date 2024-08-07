module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.app.json',
		tsconfigRootDir: __dirname,
	},
	plugins: ['react-refresh', 'eslint-plugin-import', 'unused-imports', 'react'],
	rules: {
		'react/self-closing-comp': ['error'],
		'@typescript-eslint/no-misused-promises': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		quotes: [2, 'single', { avoidEscape: true }],
		'jsx-quotes': [2, 'prefer-single'],
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'unused-imports/no-unused-imports': 'error',
		indent: [2, 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		semi: ['error', 'always'],
		'import/order': [
			'error',
			{
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before',
					},
				],
				pathGroupsExcludedImportTypes: ['react'],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-argument': 'off',
		'react/jsx-max-props-per-line': [2, { 'maximum': 1, 'when': 'always' }],
	},
};
