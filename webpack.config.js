const path = require('path');

module.exports = {
    entry: './src/module.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs2'
    }
};