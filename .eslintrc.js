module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/strongly-recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "no-unused-vars": ["warn"],
    "no-console": ["warn"],
    "no-undef": ["error"],
    "space-before-function-paren": ["error", "always"],
    "indent": ["error", 2],
    "padded-blocks": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "space-infix-ops": ["error"],
    "object-curly-spacing": ["error", "always"],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/order-in-components": 2
  },
  "globals": {
    "window": "readable"
  }
}
