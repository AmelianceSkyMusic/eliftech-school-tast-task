module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'next/core-web-vitals',
		'plugin:react/jsx-runtime',
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint',
		'simple-import-sort',
	],
	'rules': {
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'simple-import-sort/imports': ['error', {
			groups: [
				['^react'],
				['^antd'],
				['^@?\\w'],
				['@/(.*)'],
				['^~'],
				['^~/ameliance-ui'],
				['^[./]'],
				['^~assets'],
				['@.+.(sc|sa|c)ss$'],
				['.(sc|sa|c)ss$'],
				['.module.(sc|sa|c)ss$'],
			],
		}],
	}
};
