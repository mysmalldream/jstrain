var CommonsChunkPlugin=require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        app:'./main.js',
        vendor:['jquery'],
    },
    output: {
        filename: 'bundle.js'
    },
    plugins:[
        new CommonsChunkPlugin('vendor',vendor.js)
    ]
};