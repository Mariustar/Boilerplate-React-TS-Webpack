// {
//   "env": {
//     "browser": true,
//     "es2021": true,
//     "node": true,
//     "amd": true
//   },
//   "extends": [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:@typescript-eslint/recommended",
//     "prettier"
//   ],
//   "parser": "@typescript-eslint/parser",
//   "parserOptions": {
//     "ecmaFeatures": {
//       "jsx": true
//     },
//     "ecmaVersion": "latest",
//     "sourceType": "module"
//   },
//   "plugins": ["react", "@typescript-eslint", "react-hooks", "prettier"],
//   "rules": {
//     react/react-in-jsx-scope": "off",
//     "camelcase": "warn",
//     "spaced-comment": "error",
//     "no-duplicate-imports": "error",
//     "quotes": ["error", "double", { "avoidEscape": true }],
//     "jsx-quotes": ["error", "prefer-double"],
//     "no-unused-vars": "warn",
//     "@typescript-eslint/no-non-null-assertion": "off"
//   },
//   "settings": {
//     "import/resolver": {
//       "typescript": {}
//     }
//   }
// }
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/no-var-requires": "off",
    "react/props-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    camelcase: "warn",
    "spaced-comment": "error",
    "no-duplicate-imports": "error",
    quotes: ["error", "double", { avoidEscape: true }],
    "jsx-quotes": ["error", "prefer-double"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
