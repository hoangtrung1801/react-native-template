import 'dotenv/config';

export default {
  expo: {
    name: 'RN Template',
    slug: 'rn_template',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    scheme: 'rn_template',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.myflexx.rn_template',
    },
    android: {
      package: 'com.myflexx.rn_template',
      permissions: [
        // 'android.permission.BLUETOOTH',
        // 'android.permission.BLUETOOTH_ADMIN',
        // 'android.permission.BLUETOOTH_CONNECT',
      ],
      adaptiveIcon: {
        foregroundImage: './src/assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      edgeToEdgeEnabled: true,
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './src/assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      'react-native-fast-tflite',
      // [
      //   'react-native-ble-plx',
      //   {
      //     isBackgroundEnabled: true,
      //     modes: ['peripheral', 'central'],
      //     bluetoothAlwaysPermission:
      //       'Allow $(PRODUCT_NAME) to connect to bluetooth devices',
      //   },
      // ],
      [
        'expo-splash-screen',
        {
          image: './src/assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
        },
      ],
      'expo-font',
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      // ble: {
      //   dataServiceUUID: process.env.DATA_SERVICE_UUID,
      //   characteristicUUID: process.env.CHARACTERISTIC_UUID,
      // },
    },
  },
};
