const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const js = {
    test: /\.js$/,
    exclude: /nodemodules/,
    loader: 'babel-loader'
}
const serverConfig = {
    entry: {
        'serverComponents': './src/client/routes.js'

    },
    output: {
        libraryTarget: "commonjs2",
        libraryExport: "default",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [js]
    },
    externals: [webpackNodeExternals()]

};

const clientConfig = {
    mode: 'development',
    target: 'web',
    entry: {
        'clientHydraterService': './src/client/hydratorService.js',
    },
    module: {
        rules: [js]
    },
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: '[name].js'
    }
}


module.exports = [serverConfig, clientConfig]