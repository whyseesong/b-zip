const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, '../', dir);
}

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: (config) => {
    // config.devtool = 'eval-source-map';
    config.module.rules = [
      {
        test: /\.(js|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ];

    config.resolve = {
      extensions: ['*', '.js', '.tsx', '.ts'],
      alias: {
        '@components': resolve('./src/components'),
        '@hooks': resolve('./src/hooks'),
        '@containers': resolve('./src/containers'),
      },
    };

    return config;
  },
};
