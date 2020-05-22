// compile, transpile, minify ...put everything into one file and give it to html if a web app.
const path = require('path');
//htmlWebPackPlugin: This generates the HTML dynamically, with an <script> tag including our dist/bundle.js file.
const HtmlWebpackPlugin = require('html-webpack-plugin');
// to generate a clean dist folder every time
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {

    // give the entry JS file for our app.
    entry: './src/index.tsx',
    mode: 'production',
    target: 'web', // <=== can be omitted as default is 'web', but if we are writing for node we set target:node
    output: {
        // path: path.resolve('./dist/') or....,
        path: path.join(__dirname, '/dist'),
        filename: 'shrutha-addition.js',
        library: 'shruthaAdd',
        //Variable: as a global variable made available by a script tag (libraryTarget:'var').This is the default
        //This: available through the this object (libraryTarget:'this').
        //Window: available through the window object, in the browser (libraryTarget:'window').
        //UMD: available after AMD or CommonJS require (libraryTarget:'umd').
        libraryTarget: 'umd',
    },
    // Enable sourcemaps for debugging webpack's output.
    //browser--> source--> webpack/./src/App.tsx(but the tsconfig sourcemap is also needed to see the original ts code )
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
        //when we have an import App from './App' instead of './App.tsx', webpack will look for the below extensions
        // values provided in the array
        extensions: [".ts", ".tsx",'.js', '.jsx']
    },
    // Using externals to avoid bundling libraraies like react, react-dom, so the consumer is required to load it.
    //Make sure to mention these as peerDependencies.


    // Now,if you run webpack, you will find that a largish bundle is created. If you inspect the file, you'll see that react,react-dom has been 
    //bundled along with your code. In this case, we'd prefer to treat react, react-dom as a peerDependency. Meaning that the consumer should already have react, react-dom installed. 
    //Hence you would want to give up control of this external library to the consumer of your library.
    //This can be done using the externals configuration:
    externals: {
        react: {
          root: 'React',
          commonjs: 'react',
          commonjs2: 'react',
          amd: 'react',
        },
        'react-dom': {
          root: 'ReactDOM',
          commonjs: 'react-dom',
          commonjs2: 'react-dom',
          amd: 'react-dom',
        },
      },
    plugins: [
        //We can also not specify the template, the plugun will create a default html.
        // But if we want to add any scripts this is a nice way to create our own html, add scripts 
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new CleanWebpackPlugin(),
       
    ]


}