module.exports = {
    extends: [
        "codingitwrong",
        "plugin:prettier/recommended"
    ],
    parser: "babel-eslint",
    plugins: [
        "jest",
    ],
    env: {
        "browser": true,
        "jest/globals": true
    }

};