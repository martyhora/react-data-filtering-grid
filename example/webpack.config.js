var path = require('path');

module.exports = {
    entry: {
        'app': './app/app.js'
    },
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: [ path.join(__dirname, 'app'), path.join(__dirname, '../lib') ],
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map'
};