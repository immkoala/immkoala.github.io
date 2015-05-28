/**
 * Created by immkoala on 14/10/9.
 */

var path = require('path');
var webpack = require('webpack')

module.exports = {
    entry: './index.jsx',
    output: {
        path: './build',
        filename: 'bundle.js',
        publicPath: '/build'
//        publicPath: 'http://s.yunshipei.com/static/build/'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'web_modules'],
        extensions: ['', '.js', '.jsx', '.coffee', '.html', '.css', '.scss']
    }
};