module.exports = {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4,
    overrides: [
        {
            files: ['src/**/*.tsx'],
            options: {
                parser: 'flow',
            },
        },
    ],
};
