import rootNavigation from "../components/RootNavigation"

/**
 * Use navigation to navigate to screen
 * @param {string} screen name
 * @param {*} params params
 * @param {*} navigation default will use rootNavigation
 */
 const navigate = (screen, params, navigation = rootNavigation()) => {
  navigation.navigate(screen, params)
}

export const navigateToLogin = () => {
  navigate('Login')
}