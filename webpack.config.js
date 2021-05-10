const path = require('path')
module.exports = {
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, './build'),
    },
    entry: path.resolve(__dirname, "./index.js"),
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/,
                use:"babel-loader"
            },
            { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: "file-loader" }
        ]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: '/',
        filename:"bundle.js"
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'build'),
        open: true,
        hot: true,
        port:3000,
        compress: true
      }
};