module.exports = function (api) {
    api.cache(true);

    const presets = [['@babel/preset-env', { useBuiltIns: 'entry', corejs: '3' }], '@babel/preset-react'];
    const plugins = [
        ['@dr.pogodin/babel-plugin-react-css-modules',
            {
                filetypes: {
                    '.scss': {
                        syntax: 'postcss-scss',
                    },
                },
                "webpackHotModuleReloading": true,
                "autoResolveMultipleImports": true
            }
        ]
    ];

    return {
        presets,
        plugins,
    };
};
