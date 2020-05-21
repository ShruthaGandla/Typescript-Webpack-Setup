// compile, transpile, minify ...put everything into one file and give it to html if a web app.
const path = require('path');
//htmlWebPackPlugin: This generates the HTML dynamically, with an <script> tag including our dist/bundle.js file.
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    // give the entry JS file for our app.
    entry: './src/index.tsx',
    mode: 'production',
    output: {
        filename: 'bundle.js',
        // path: path.resolve('./dist/') or....,
        path: path.join(__dirname, '/dist')

    },
    // Enable sourcemaps for debugging webpack's output.
    //browser--> source--> webpack/./src/App.tsx(but the tsconfig sourcemap is also needed to see the uncompiled code )
    devtool: "source-map",
    // how to compile things, takes the files with regex extensions and uses the loader provided to compile a/c
    module: {
        rules : [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        // ts-loader does not write any file to disk. It compiles your TypeScript files and 
                        // passes the resulting JavaScript to webpack, this happens in memory. There is no reason to output the compiled JavaScript as 
                        //it's included in the bundle. The bundle contains everything you need.
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            // {
            //     enforce: "pre",
            //     test: /\.js$/,
            //     loader: "source-map-loader"
            // }
        ]

    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        //when we have an import App from './App' instead of './App.tsx', webpack will look for the below 
        // values provided in the array
        extensions: [".ts", ".tsx",'.js', '.jsx']
    },

    plugins: [
        //We can also not specify the template, the plugun will create a default html.
        // But if we want to add any scripts this is a nice way to create our own html, add scripts 
        new HtmlWebpackPlugin({template: './src/index.html'}),
       
    ]


}