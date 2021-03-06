const path = require('path');

module.exports = {
    entry: ['whatwg-fetch', './components/App.jsx'],
    output: {
        path: path.resolve(__dirname, '../public/js'),
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                plugins: ['transform-class-properties'],
                presets: ['react', 'env']
            }
        }]
    }
};
