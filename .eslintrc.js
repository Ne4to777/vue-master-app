module.exports = {
	root: true,
	env: {
		node: true,
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:vue/essential',
		'@vue/airbnb',
		'@vue/typescript/recommended'
	],
	parserOptions: {
		ecmaVersion: 2020,
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
		createDefaultProgram: true,
	},

	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-tabs': 0,
		'comma-dangle': 0,
		'arrow-parens': 0,
		'no-confusing-arrow': 0,
		'no-nested-ternary': 0,
		'no-use-before-define': 0,
		'no-console': 0,
		'no-await-in-loop': 0,
		'no-loop-func': 0,
		'func-names': 0,
		'no-restricted-syntax': 0,
		'implicit-arrow-linebreak': 0,
		'import/no-dynamic-require': 0,
		'global-require': 0,
		'lines-between-class-members': [
			'error',
			'always'
		],
		'space-before-function-paren': ['error', {
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always'
		}],
		'import/no-cycle': [
			0,
			{
				'maxDepth': 1
			}
		],
		'import/newline-after-import': [
			'error',
			{
				'count': 1
			}
		],
		'max-len': [
			'error',
			120
		],
		'indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'operator-linebreak': 0,
		'@typescript-eslint/semi': ['error', 'never'],
		'@typescript-eslint/member-delimiter-style': ['error', { 'multiline': { 'delimiter': 'none' } }],
		'@typescript-eslint/member-ordering': 'warn',
		'@typescript-eslint/no-magic-numbers': [
			'error',
			{
				'ignoreNumericLiteralTypes': true,
				'ignoreEnums': true,
				'enforceConst': true,
				'ignoreReadonlyClassProperties': true,
				'ignore': [0, 24, 60, 1000]
			}
		],
		'@typescript-eslint/brace-style': ['error', '1tbs'],
		'@typescript-eslint/indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'@typescript-eslint/quotes': ['error', 'single', { 'avoidEscape': true }],
		'@typescript-eslint/func-call-spacing': ['error', 'never'],
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/prefer-for-of': 'warn',
		'@typescript-eslint/no-parameter-properties': 'error',
		'@typescript-eslint/no-unnecessary-type-arguments': 'warn',
		'@typescript-eslint/prefer-function-type': 'warn',
		'@typescript-eslint/prefer-readonly': 'warn',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/camelcase': ['error', { 'properties': 'never' }],
		'@typescript-eslint/explicit-function-return-type': ['error', { 'allowExpressions': true }],
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_$' }],
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx']
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true
			}
		}
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)',
			],
			env: {
				jest: true,
			},
		},
	],
}
