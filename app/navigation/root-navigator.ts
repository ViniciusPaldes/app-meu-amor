import { createSwitchNavigator } from "react-navigation"
import { PrimaryNavigator } from "./primary-navigator"

export const RootNavigator = createSwitchNavigator(
  {
    primaryStack: { screen: PrimaryNavigator }
  }
)
