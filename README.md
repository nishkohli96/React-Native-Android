# React-Native-Android

Implement Android Specific Features like Bluetooth, Location etc. Also uses tabbled navigation and theming support.

### Development Steps

-   Make sure to add all the required permissions in the AndroidManifest.xml file
-   Use [react-native-permissions](https://www.npmjs.com/package/react-native-permissions) for easier access to grant permissions for both Android & iOS.
-   Enable [Multi-Dex](https://developer.android.com/studio/build/multidex#kotlin) in Android
-   To add Tailwind Css (Optional), configure for [React](https://tailwindcss.com/docs/guides/create-react-app), then use [tailwind-rn](https://github.com/vadimdemedes/tailwind-rn). Prefer using styled-components in this case.