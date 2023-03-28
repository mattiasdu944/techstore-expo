# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-react-native-app -t with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
- [Request for Comments](https://github.com/expo/router/discussions/1)


## Generate Apk

```bash
#Install eas cli for generate apk
npm i -g eas-cli
```

```bash
#Insert your credentials
eas login
```

```bash
#Insert your configuration
eas build:configure

#Create APK
eas build -p andriod --profile preview