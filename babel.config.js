module.exports = function(api) {
    api.cache(true);

    const presets = [['@babel/preset-env', { useBuiltIns: 'entry', corejs: '3' }], '@babel/preset-react'];

    return {
        presets,
    };
};
