## RN Template (Expo + React Native)

Modern React Native starter powered by Expo Router, TypeScript, NativeWind (Tailwind CSS), and a curated set of libraries for navigation, forms, state, Firebase, BLE, and on-device ML (TFLite).

### Tech Stack
- **Runtime**: Expo SDK 53, React 19, React Native 0.79
- **Language**: TypeScript
- **Routing**: Expo Router v5 (file-based routing in `src/app`)
- **Styling**: NativeWind v4 + Tailwind CSS (+ `tailwindcss-animate`)
- **Navigation**: React Navigation v7 (`@react-navigation/*`)
- **Forms & Validation**: React Hook Form + Zod
- **State Management**: Zustand
- **Backend/Services**: Firebase JS SDK (config via `app.config.js` extras)
- **BLE (optional)**: `react-native-ble-plx` (plugin commented; enable when needed)
- **On-device ML (optional)**: `react-native-fast-tflite` with `.tflite` models
- **Icons**: `lucide-react-native`, `@expo/vector-icons`
- **Web**: `react-native-web` (Expo web bundler: Metro)
- **Linting**: ESLint (`eslint-config-expo`)
- **Testing**: Jest

### Features
- File-based routing with typed routes
- Dark mode ready (`userInterfaceStyle: automatic`)
- Pre-wired Tailwind theme tokens and animations
- Ready-to-use UI primitives in `src/components/ui`
- Example assets and Google Fonts (Work Sans)
- Firebase config via environment variables
- Optional BLE scaffolding and TFLite integration

---

### Getting Started

#### Prerequisites
- Node.js LTS
- Yarn 4 (managed via Corepack)
- Xcode (iOS) and/or Android Studio (Android)

Enable Corepack and install dependencies:

```bash
corepack enable
yarn install
```

Start the dev server:

```bash
yarn start
```

Run on platforms:

```bash
yarn ios      # iOS simulator (requires Xcode)
yarn android  # Android emulator/device
yarn web      # Web via Expo (Metro bundler)
```

Useful scripts:

```bash
yarn lint          # ESLint
yarn test          # Jest
yarn reset-project # Clean caches and reinitialize (see scripts/reset-project.js)
```

---

### Environment Variables
This template reads configuration from environment variables via `app.config.js` (`expo.extra`). Create a `.env` file at the repo root.

Example `.env`:

```bash
# Firebase (required if you use Firebase)
FIREBASE_API_KEY=xxx
FIREBASE_AUTH_DOMAIN=xxx.firebaseapp.com
FIREBASE_PROJECT_ID=xxx
FIREBASE_STORAGE_BUCKET=xxx.appspot.com
FIREBASE_MESSAGING_SENDER_ID=xxx
FIREBASE_APP_ID=1:xxx:web:xxx
FIREBASE_MEASUREMENT_ID=G-XXXXXXX

# BLE (optional – uncomment plugin/permissions first)
# DATA_SERVICE_UUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
# CHARACTERISTIC_UUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

Notes:
- BLE fields are commented in `app.config.js` under `extra` and plugin section; uncomment to enable.
- When changing native config (plugins, permissions, icons), run a prebuild (see Native Modules below).

---

### Project Structure

```
src/
  app/                # Expo Router routes (e.g., index.tsx, _layout.tsx)
  assets/             # Images, fonts, models (.tflite)
  components/         # Reusable components
    ui/               # Tailwind/NativeWind-based UI primitives
  constants/          # App constants (e.g., Colors)
  hooks/              # Reusable hooks (theme, etc.)
  lib/                # Utilities (regex, theme, helpers)
  global.css          # Tailwind variables mapped to NativeWind tokens
scripts/
  reset-project.js    # Cache clean and reset helper
```

Tailwind config lives in `tailwind.config.js` and uses the NativeWind preset. ESLint is configured via `eslint.config.js`. TypeScript paths map `@/*` to `./src/*` in `tsconfig.json`.

---

### Styling (NativeWind + Tailwind)
- Tailwind classes are available in React Native via NativeWind.
- Custom theme tokens and animations are defined in `tailwind.config.js`.
- Fonts (Work Sans) are included via `@expo-google-fonts/work-sans` and `expo-font` plugin.

---

### Navigation (Expo Router + React Navigation)
- Routes are defined by files in `src/app` (e.g., `index.tsx`, `_layout.tsx`).
- React Navigation primitives are available if you need advanced navigation patterns.

---

### State, Forms, Validation
- Global state: Zustand
- Forms: React Hook Form
- Schema validation: Zod (with `@hookform/resolvers/zod`)

---

### Firebase
The Firebase Web SDK is included. Provide your keys via `.env` (see above) and initialize in your app code as needed. Values are exposed under `expo.extra.firebase`.

---

### BLE (optional)
- Library: `react-native-ble-plx`
- To enable background/peripheral modes and permissions, uncomment the BLE plugin block and permissions in `app.config.js`.
- After changing native configuration, run a prebuild (see below).

---

### TFLite (optional)
- Library: `react-native-fast-tflite`
- Sample models are placed in `src/assets/model_*.tflite`.
- Loading models usually requires native assets configuration; ensure they are bundled appropriately. After enabling/adjusting configuration, run a prebuild (see below).

---

### Native Modules & Prebuild
When you change native configuration (plugins, permissions, icons, package identifiers), you must regenerate native projects:

```bash
# Generate native iOS/Android projects from app config
expo prebuild --clean

# Then run the app
yarn ios
yarn android
```

For iterative dev without native changes, `yarn start` is enough.

---

### Testing & Linting
- **Testing**: Jest (`yarn test`)
- **Linting**: ESLint (`yarn lint`)

---

### Troubleshooting
- If Metro cache or native builds act up, try the reset script:

```bash
yarn reset-project
```

- Ensure your environment variables are loaded (restart the dev server after edits).
- For iOS/Android build errors after changing `app.config.js`, run `expo prebuild --clean`.

---

### License
Add your license of choice (e.g., MIT) in a `LICENSE` file.
