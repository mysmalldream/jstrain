var webpack=require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './index.js'
    ],
    output: {
        filename: 'bundle.js',
        publicPath:'/static/'
    },
    module:{
        loaders:[
            {
                test:/\.js[x]?$/,
                exclude:/node_modules/,
                loader:'babel-loader?presets[]=es2015&presets[]=react',
                include:path.join(__dirname,'.')
            },
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
};