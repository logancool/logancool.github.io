module.exports = function(api) {
    api.cache(true);

    const presets = [['@babel/preset-env', { useBuiltIns: 'entry', corejs: '3' }], '@babel/preset-react'];
    const plugins = [
        ['babel-plugin-react-css-modules',
            {
                filetypes: {
                    '.scss': {
                        syntax: 'postcss-scss',
                    },
                },
            }
        ]
    ];

    return {
        presets,
        plugins,
    };
};
