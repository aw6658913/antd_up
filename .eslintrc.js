module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:react/recommended',
        'plugin:jsx-control-statements/recommended',
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'prettier/react',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['@typescript-eslint', 'react', 'jsx-control-statements', 'prettier'],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        'jsx-control-statements/jsx-control-statements': true,
    }, //代码运行的环境
    globals: {
        $: true,
        __zhCN__: true,
    },
    rules: {
        'prettier/prettier': 0,
        'no-console': ['warn', { allow: ['warn', 'error'] }], // 不能使用console
        eqeqeq: ['warn', 'always'], // 必须使用全等
        camelcase: ['error', { properties: 'always', allow: ['^(_*([a-zA-Z0-9]))*$'] }],
        '@typescript-eslint/camelcase': ['error', { properties: 'always', allow: ['^(_*([a-zA-Z0-9]))*$'] }],
        'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }], // 首选const
        '@typescript-eslint/indent': ['error', 4, { VariableDeclarator: 4, SwitchCase: 1 }], // 强制一致的缩进
        '@typescript-eslint/no-unused-vars': 0, // 禁止使用未使用的变量
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/explicit-member-accessibility': 0, // 在类属性和方法上需要显式可访问性修饰符
        '@typescript-eslint/no-triple-slash-reference': 0,
        '@typescript-eslint/ban-ts-ignore': 0, // 禁止使用“/@ts ignore”注释
        '@typescript-eslint/no-this-alias': 0, // 不允许使用别名
        '@typescript-eslint/triple-slash-reference': ['error', { path: 'always', types: 'never', lib: 'never' }], // 设置三斜杠指令与ES6样式导入de的首选级别
        '@typescript-eslint/explicit-function-return-type': [
            'off',
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
            },
        ], // 需要函数和类方法的显式返回类型
        '@typescript-eslint/no-explicit-any': 'off', // 关掉隐形类型的检测
        // React相关校验规则
        'react/jsx-indent': [2, 4], // 代码缩进风格
        'react/jsx-no-undef': [2, { allowGlobals: true }], // 变量和函数在使用前必须先声明。全局变量或函数除外
        'jsx-control-statements/jsx-use-if-tag': 0
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
    },
};
