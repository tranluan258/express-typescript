export default {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: [
        "@typescript-eslint",
        ["prettier"],
    ],
    rules: {
        "prettier/prettier": "error",
        "no-unused-vars": "warn",
        "no-console": "off",
        "func-names": "off",
        "no-plusplus": "off",
        "no-process-exit": "off",
        "class-methods-use-this": "off"
    }
}
