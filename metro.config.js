const { getDefaultConfig } = require('@expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);
config.resolver.sourceExts.push('cjs');
config.resolver.assetExts.push('csv', 'tflite');
config.resolver.unstable_enablePackageExports = false;

module.exports = withNativeWind(config, {
  input: './src/global.css',
  inlineRem: 16,
});
