const path = require('path');

module.exports = {
    entry: './node_modules/protractor-heat-map/src/heatmap/heatmap.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "./node_modules/protractor-heat-map/node_modules/transform-loader?brfs"
            }
        ]
    }
};