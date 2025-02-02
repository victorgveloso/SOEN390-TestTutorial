# Welcome to your Expo app with maestro tests 👋

## 1st Demo Instructions

1. Install dependencies

   ```bash
   $ npm install
   ```

2. Install maestro in your PC

   ```bash
   $ curl -fsSL "https://get.maestro.mobile.dev" | bash
   ```


3. Connect your pc to  your target device (android emulator, ios simulator, real device by cable)

3. Build the project to your platform (android, ios)

   a. Android

   ```bash
   $ npm run android
   ```

   b. iOS

   ```bash
   $ npm run ios
   ```

4. In another terminal, run one test

   ```bash
   $ maestro test maestro/test.yaml
   ```

5. Run all tests

   ```bash
   $ maestro test maestro/
   ```