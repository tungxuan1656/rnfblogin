# React Native Firebase Login

## Init project
* Create project with tree folder
```
.
├── App.js
├── assets
│   ├── AppColors.js
│   ├── AppFont.js
│   ├── AppIcons.js
│   ├── AppImages.js
│   ├── Assets.js
│   ├── fonts
│   │   ├── Quicksand-Bold.ttf
│   │   ├── Quicksand-Light.ttf
│   │   ├── Quicksand-Medium.ttf
│   │   ├── Quicksand-Regular.ttf
│   │   └── Quicksand-SemiBold.ttf
│   ├── icons
│   │   ├── btn_close.png
│   │   ├── btn_close@2x.png
│   │   └── btn_close@3x.png
│   ├── images
│   │   ├── img_app_name.png
│   │   ├── img_app_name@2x.png
│   │   └── img_app_name@3x.png
│   └── locales
│       ├── string.en.json
│       └── string.vi.json
├── components
│   ├── Dialog
│   │   ├── GSpinner.js
│   │   └── GToast.js
│   ├── ImageView
│   │   └── ImageViewPlaceHolder.js
│   ├── RootNavigation.js
│   └── Separator.js
├── configs
│   ├── Config.js
│   └── ConfigSlice.js
├── constants
│   ├── Const.js
│   ├── Global.js
│   └── Styles.js
├── controllers
│   ├── api
│   │   ├── APIConfig.js
│   │   ├── APIMiddleware.js
│   │   └── APIServices.js
│   ├── notification
│   ├── redux
│   │   ├── AppSlice.js
│   │   ├── AppStore.js
│   │   └── GlobalSlice.js
│   ├── socket
│   └── translate
├── helpers
├── modules
│   ├── Example
│   │   └── Example.js
│   └── Login
│       └── Login.js
├── routes
│   ├── AppLaunching.js
│   ├── AppNavigator.js
│   └── AppTabBar.js
└── utils
    ├── NavUtils.js
    └── Utils.js

22 directories, 42 files
```
* Copy format file `.prettierrc.js`
* Change location `App.js`
* Copy `scripts` in `package.json`

# Setup Project
## Momemt, lodash,...
```
yarn add lodash
yarn add @react-native-async-storage/async-storage
yarn add react-native-status-bar-height
yarn add moment
```

## Navigation
```
yarn add @react-navigation/native
yarn add react-native-screens react-native-safe-area-context
yarn add @react-navigation/native-stack
```

## Bottom-tabs
```
yarn add @react-navigation/bottom-tabs
```

## Custom fonts
1. Create react-native.config.js
```
module.exports = {
    project:{
        ios: {},
        android: {},
    },
    assets: ['./app/assets/fonts'],
}
```
2. Copy font files to folder and Run
```
react-native link
```

## Translate i18-next
```
yarn add react-i18next i18next react-native-localize
```
1. Add languages list and config in **I18n.js**
```
controllers/translate/I18n.js
```
2. Set current language app in **AppLaunching.js**
```
  useLayoutEffect(() => {
    // current language code: vi
    I18n.changeLanguage('vi').then(() => {
      console.log(I18n.language)
    }).catch((e) => {
      console.log(e)
    })
  }, [])
```

## Redux, Redux thunk
```
yarn add redux react-redux @reduxjs/toolkit redux-thunk redux-persist redux-persist-transform-filter
```
* Config AppStore


## Axios, API
```
yarn add axios
```
> https://github.com/axios/axios
* Setup
  * `APIConfig.js`
  * `APIServices.js`
  * `APIMiddleware.js`


## Permission
```
yarn add react-native-permissions
```
> https://github.com/zoontek/react-native-permissions
`Podfile`
```
pod 'Permission-Camera', :path => "#{permissions_path}/Camera"
pod 'Permission-LocationWhenInUse', :path => "#{permissions_path}/LocationWhenInUse"
pod 'Permission-MediaLibrary', :path => "#{permissions_path}/MediaLibrary" // Apple music
pod 'Permission-PhotoLibrary', :path => "#{permissions_path}/PhotoLibrary"
pod 'Permission-PhotoLibraryAddOnly', :path => "#{permissions_path}/PhotoLibraryAddOnly
pod 'Permission-Microphone', :path => "#{permissions_path}/Microphone"
pod 'Permission-Notifications', :path => "#{permissions_path}/Notifications"
```
`Info.plist`
```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>

  <!-- 🚨 Keep only the permissions used in your app 🚨 -->

  <key>NSCameraUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSLocationWhenInUseUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSMicrophoneUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSPhotoLibraryUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSPhotoLibraryAddUsageDescription</key>
  <string>YOUR TEXT</string>
  <!-- … -->

</dict>
</plist>
```
`android/app/src/main/AndroidManifest.xml`
```
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.myawesomeapp">

  <!-- 🚨 Keep only the permissions used in your app 🚨 -->

  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
  <uses-permission android:name="android.permission.CAMERA" />
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
  <uses-permission android:name="android.permission.RECORD_AUDIO" />
  <uses-permission android:name="android.permission.VIBRATE" />
  <!-- … -->

</manifest>
```

## Modal, Toast, Spinner,...
```
yarn add react-native-toast-message
yarn add react-native-modals
yarn add react-native-loading-spinner-overlay
```

## Install Firebase, Firebase Authentication
> https://rnfirebase.io/
  * Install package
    * `yarn add @react-native-firebase/app`
    * Tạo app trên firebase console
    * Register 2 app iOS và Android
    * Build android lỗi: `open -a /Applications/Android\ Studio.app`
  * Config firebase
```
# Key services
android/app/google-services.json
ios/GoogleService-Info.plist
```