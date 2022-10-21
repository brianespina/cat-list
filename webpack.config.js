const path = require('path') //global node module
const HTMLWebpackPlugin = require('html-webpack-plugin') //Application html file module

module.exports = {

    //Application entry point 
    entry: './src/index.tsx', 

    //Application bundled file location
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    //Application html file
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],

    //Specify loaders transpiler
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.json'],
                },
                use: 'ts-loader'
            }
        ]
    }

}