// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js', 
  },
};
module.exports = {
    // Other configurations...
    module: {
      rules: [
        {
          test: /\.js$/, // Apply this rule to .js files
          exclude: /node_modules/, // Don't apply to files in node_modules
          use: {
            loader: 'babel-loader', // Use babel-loader for transpilation
            options: {
              presets: ['@babel/preset-env'] // Configure presets
            }
          }
        }
      ]
    }
  };
  