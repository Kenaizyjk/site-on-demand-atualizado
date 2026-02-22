import next from "eslint-config-next"
import tsParser from "@typescript-eslint/parser"
import tsPlugin from "@typescript-eslint/eslint-plugin"

const baseRules = {
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",
  "react-hooks/purity": "off",
  "react-hooks/set-state-in-effect": "off",
  "react/no-unescaped-entities": "off",
  "no-console": [
    "warn",
    {
      allow: ["warn", "error"],
    },
  ],
  "prefer-const": "warn",
  "no-var": "warn",
  "no-multiple-empty-lines": "off",
  eqeqeq: "warn",
  curly: "off",
  "brace-style": "off",
  quotes: "off",
  semi: "off",
  "comma-dangle": "off",
  "object-curly-spacing": "off",
  "array-bracket-spacing": "off",
  "space-before-function-paren": "off",
}

const tsRules = {
  "@typescript-eslint/no-unused-vars": "warn",
  "@typescript-eslint/no-explicit-any": "warn",
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/no-non-null-assertion": "warn",
}

const config = [
  ...next,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      ...baseRules,
      ...tsRules,
    },
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      ...baseRules,
    },
  },
]

export default config
