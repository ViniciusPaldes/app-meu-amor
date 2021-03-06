import createNativeStackNavigator from "react-native-screens/createNativeStackNavigator"
import { PrincipalTabNavigator } from "./principalTab-navigator"

export const PrimaryNavigator = createNativeStackNavigator(
  {
    principalTab: { screen: PrincipalTabNavigator }
  },
  {
    headerMode: "none",
  },
)

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = ["welcome"]
