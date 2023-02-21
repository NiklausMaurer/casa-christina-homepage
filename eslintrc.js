module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 2020,
        parser: {
            ts: "@typescript-eslint/parser",
        }
    },
    extends: ['plugin:vue/vue3-recommended'],
    ignorePatterns: ['dist/', 'node_modules/', '*.json', '.temp/'],
    rules: { /**/ },
};