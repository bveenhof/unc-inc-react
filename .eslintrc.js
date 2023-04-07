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
        'max-len': ["error", { "code": 150 }],
        'linebreak-style': 0,
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "off",
    }
};
