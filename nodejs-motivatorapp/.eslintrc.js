module.exports = {
  env: {
    node: true,
    es2021: true,
    "jest/globals": true  // ✅ Enables Jest global variables
  },
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended"  // ✅ Uses Jest's recommended linting rules
  ],
  plugins: ["jest"],  // ✅ Adds Jest plugin for ESLint
  rules: {}
};


