const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    entry:'./src/client/routes.js',
    output:{
        filename:'client.js',
        libraryTarget: "commonjs2",
        libraryExport: "default",
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/nodemodules/,
                loader:'babel-loader'
            }
        ]
    },
    externals: [webpackNodeExternals()]

}