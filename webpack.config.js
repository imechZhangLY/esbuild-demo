module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: 'url-loader',
            },
        ],
    },
}