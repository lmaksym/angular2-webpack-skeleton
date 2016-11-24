var helpers = require('./helpers');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: [ '.ts', '.js']
    },

    module: {
        rules: [

            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader','angular2-router-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'

            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: 'null'
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw'
            },
            {
                test: /\.(sass|scss)$/,
                exclude: helpers.root('src', 'app'),
                loader: 'null'
            },
            {
                test: /\.(sass|scss)$/,
                include: helpers.root('src', 'app'),
                loaders: ['raw-loader', 'sass-loader?sourceMap']
            }
        ]
    }
};
