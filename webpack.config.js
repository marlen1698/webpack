//webpack.config.js
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },

    module: {//在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
                // query: {
                //     presets: ['es2015','react']
                // }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                //  loader: [ 'style-loader', 'css-loader' ] //可以使用style
                // loader: ['style-loader?modules', 'css-loader?modules']//跟前面相比就在后面加上了?modules
                // loader: ['style-loader?modules', 'css-loader?modules', 'postcss-loader?modules'],//等同于下行
                loader: 'style-loader?modules!css-loader?modules!postcss-loader?modules'
            }
        ]
    },
    // postcss: [
    //     require('autoprefixer')
    // ],
    //
    // plugins: [
    //     new webpack.BannerPlugin("Copyright Flying Unicorns inc.")//在这个数组中new一个就可以了
    // ],
    // devServer: {
    //     contentBase: "./public", //本地服务器所加载的页面所在的目录
    //     colors: true, //终端中输出结果为彩色
    //     historyApiFallback: true, //不跳转
    //     inline: true //实时刷新
    // },


    plugins: [
        new webpack.BannerPlugin("Copyright Flying Unicorns inc."),//文件头部添加版权
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [precss, autoprefixer];
                },
                devServer: {
                    contentBase: "./public", //本地服务器所加载的页面所在的目录
                    colors: true, //终端中输出结果为彩色
                    historyApiFallback: true, //不跳转
                    inline: true //实时刷新
                }
            }
        })
    ]

};