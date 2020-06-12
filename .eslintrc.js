module.exports = {
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
		ecmaFeatures: {
			impliedStrict: true,
			jsx: false
		}
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json'
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'prettier/@typescript-eslint'
	],
	rules: {
		// '@typescript-eslint/arrow-return-shorthand': 1,
		// '@typescript-eslint/callable-types': 2,
		// '@typescript-eslint/class-name': 2,
		// '@typescript-eslint/comment-format': [1, 'check-space'],
		// '@typescript-eslint/interface-over-type-literal': 1,
		// '@typescript-eslint/label-position': 1,
		// '@typescript-eslint/member-access': [
		// 	1,
		// 	'check-accessor',
		// 	'check-parameter-property'
		// ],
		// '@typescript-eslint/member-ordering': [
		// 	1,
		// 	{
		// 		classes: [
		// 			'private-static-field',
		// 			'protected-static-field',
		// 			'public-static-field',
		// 			'private-static-method',
		// 			'protected-static-method',
		// 			'public-static-method',
		// 			'private-instance-field',
		// 			'protected-instance-field',
		// 			'public-instance-field',
		// 			'public-constructor',
		// 			'private-instance-method',
		// 			'protected-instance-method',
		// 			'public-instance-method'
		// 		]
		// 	}
		// ],
		// '@typescript-eslint/no-access-missing-member': 2,
		// '@typescript-eslint/no-arg': 2,
		// '@typescript-eslint/no-construct': 1,
		// '@typescript-eslint/no-duplicate-super': 2,
		// '@typescript-eslint/no-empty-interface': 2,

		// // '@typescript-eslint/no-inferrable-types': [
		// // 	true,
		// // 	'ignore-params',
		// // 	'ignore-properties'
		// // ],
		// '@typescript-eslint/no-internal-module': 1,
		// '@typescript-eslint/no-misused-new': 2,
		// '@typescript-eslint/no-non-null-assertion': 2,
		// '@typescript-eslint/no-shadowed-variable': 1,
		// '@typescript-eslint/no-string-literal': 1,
		// '@typescript-eslint/no-string-throw': 2,
		// '@typescript-eslint/no-switch-case-fall-through': 2,
		// '@typescript-eslint/no-unnecessary-initializer': 2,
		// '@typescript-eslint/no-unused-variable': [
		// 	2,
		// 	{
		// 		'ignore-pattern': '^_'
		// 	}
		// ],
		// '@typescript-eslint/no-var-keyword': 2,
		// '@typescript-eslint/object-literal-sort-keys': [
		// 	1,
		// 	'match-declaration-order',
		// 	'shorthand-first'
		// ],
		// '@typescript-eslint/only-arrow-functions': [2, 'allow-named-functions'],
		// '@typescript-eslint/triple-equals': [
		// 	2,
		// 	'allow-null-check',
		// 	'allow-undefined-check'
		// ],
		// '@typescript-eslint/typeof-compare': 2,
		// '@typescript-eslint/unified-signatures': 1,
		// '@typescript-eslint/variable-name': [
		// 	2,
		// 	'check-format',
		// 	'allow-leading-underscore',
		// 	'allow-pascal-case',
		// 	'allow-snake-case',
		// 	'ban-keywords'
		// ],
		// '@typescript-eslint/whitespace': [
		// 	2,
		// 	'check-branch',
		// 	'check-decl',
		// 	'check-separator',
		// 	'check-type'
		// ],
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{
				accessibility: 'explicit',
				overrides: {
					accessors: 'explicit',
					constructors: 'no-public',
					parameterProperties: 'explicit'
				}
			}
		],
		'import-blacklist': 0,
		'no-bitwise': 2,
		'no-console': 1,
		'no-debugger': 1,
		'no-empty': 1,
		'no-eval': 2,
		'no-magic-numbers': 1,
		'no-unused-expression': 0,
		'no-use-before-declare': 0,
		'prefer-const': [
			2,
			{
				destructuring: 'all'
			}
		],
		radix: 1
	}
}
