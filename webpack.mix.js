mix.webpackConfig({
    plugins: [],
    // Example of accessing environment variables
    plugins: [
        new webpack.DefinePlugin({
            'process.env.MIX_GOOGLE_MAPS_API_KEY': JSON.stringify(process.env.MIX_GOOGLE_MAPS_API_KEY),
        }),
    ],
});
