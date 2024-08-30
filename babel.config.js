module.exports = function (api) {
  api.cache(true);
  const plugins = [];

  plugins.push([
    '@tamagui/babel-plugin',
    {
      components: ['tamagui'],
      config: './src/theme/tamagui.config.ts',
      alias: {
        '@': './src',
        '@test-utils': './test-utils.js',
      },
    },
  ]);

  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};
