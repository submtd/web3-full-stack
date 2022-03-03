const mix = require('laravel-mix');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

mix.webpackConfig({
    plugins: [
        new NodePolyfillPlugin({
            excludeAliases: ['console']
        })
    ]
});

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/airdrop.js', 'public/js')
    .js('resources/js/mint.js', 'public/js')
    .js('resources/js/success.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .vue()
    .version();
