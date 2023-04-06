module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "airbnb-typescript"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 14,
        "sourceType": "module",
        "project": ['./tsconfig.json']
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'linebreak-style': 0,
        "no-unused-vars": "off",
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-unused-expressions": "off",
    }
};
