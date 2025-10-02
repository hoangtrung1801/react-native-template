Name: chatbot-mobile-template (RN Template)
Purpose: Modern Expo + React Native starter with TypeScript, Expo Router, NativeWind (Tailwind), and optional device integrations (BLE, TFLite) for rapid mobile app prototyping.
Entrypoint: `expo-router/entry` via `package.json` `main`.
Primary directories: `src/app` (routes), `src/components` (UI + primitives), `src/assets` (images, fonts, models), `src/hooks`, `src/lib`.
Key configs: `app.config.js` (Expo app + plugins), `metro.config.js` (assets, NativeWind), `tailwind.config.js`, `eslint.config.js`, `jest.config.js`, `tsconfig.json` (strict + `@/*`).
Common commands: `yarn start`, `yarn ios`, `yarn android`, `yarn web`, `yarn lint`, `yarn test`, `expo prebuild --clean`, `yarn reset-project`.