module.exports = {
  module: {
    rules: [
      {
        test: /\bmapbox-gl-csp-worker.js\b/i,
        exclude: /node_modules/,
        use: {
          loader: 'worker-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            ignore: ['./node_modules/mapbox-gl/dist/mapbox-gl.js'],
          },
          ignore: ['./node_modules/mapbox-gl/dist/mapbox-gl.js'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
