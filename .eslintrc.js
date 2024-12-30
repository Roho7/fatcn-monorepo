module.exports = {
  root: true,
  extends: ["eslint:recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
}; 