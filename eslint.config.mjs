import antfu from "@antfu/eslint-config";
// eslint-disable-next-line node/prefer-global/process
const NODE_ENV = process.env.NODE_ENV === "production" ? "warn" : "off";
export default antfu({
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["./eslintrc-auto-import.json"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  unocss: true,
  rules: {
    "no-new": ["off"],
    "no-tabs": ["error", { allowIndentationTabs: true }],
    "vue/v-on-event-hyphenation": [
      "error",
      "always",
      {
        autofix: true,
        ignore: [],
      },
    ],
    "style/max-statements-per-line": ["off"],
    "style/member-delimiter-style": ["off"],
    "vue/require-explicit-emits": ["error"],
    "vue/component-definition-name-casing": ["error", "PascalCase"],
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: false,
        ignores: ["slot"],
      },
    ],
    "vue/custom-event-name-casing": [
      "error",
      "kebab-case",
      {
        ignores: [],
      },
    ],
    "vue/no-unused-vars": [
      "error",
      {
        ignorePattern: "^_",
      },
    ],
    "no-console": NODE_ENV,
    "import/no-duplicates": ["error", { considerQueryString: true }],
    "eslint-comments/no-unlimited-disable": ["off"],
    "style/jsx-indent": ["off"],
    "jsdoc/require-returns-description": "off",
    "jsdoc/require-returns-check": "off",
    "jsdoc/check-param-names": "off",
    "no-debugger": NODE_ENV,
    "style/quotes": "off",
    "style/semi": "off",
    "antfu/if-newline": "off",
    "style/brace-style": ["error", "1tbs"],
    "style/comma-dangle": ["off"],
  },
  ignores: ["public", "**/public/**", "dist", "**/dist/**", "^u-"],
});
