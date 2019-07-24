module.exports = {
    root: true,
    extends: ['plugin:react-native/all'],
    plugins: ['react', 'react-native'],
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
            // 添加ES特性支持，使之能够识别ES6语法
            jsx: true
        }
    },
    env: {
        'react-native/react-native': true
    },
    rules: {
        'react-native/no-unused-styles': 2,
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 2,
        'react-native/no-color-literals': 0,
        'react-native/no-raw-text': 2,
        'react-native/sort-styles': ['error', 'asc', { ignoreStyleProperties: true }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
};
