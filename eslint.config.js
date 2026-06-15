import vue from 'eslint-plugin-vue'
import ts from 'typescript-eslint'

export default ts.config(
  { ignores: ['dist', 'node_modules', '.firebase', 'coverage'] },
  ...ts.configs.recommended,
  // Essential (correctness) rules only — code formatting is owned by Prettier.
  ...vue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
  {
    rules: {
      // Single-purpose landing page components (App, etc.) don't need multi-word names.
      'vue/multi-word-component-names': 'off',
    },
  }
)
