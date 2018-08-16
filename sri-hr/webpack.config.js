module.exports = {
    entry: [
        './public/js/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[local]'
                        },
                    },
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/public/js',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        port: 7777,
        historyApiFallback: true,
        contentBase: './resources/views/main.html'
    }
};