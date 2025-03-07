import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },

  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,  // ✅ Enables Node.js globals (process, require, etc.)
        ...globals.browser // Keeps browser globals (if needed)
      }
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",  // Change unused vars error to a warning
      "no-undef": "off"  // ✅ Fix `process is not defined`
    }
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];

