import * as React from "react"
import { createBottomTabNavigator } from "react-navigation"
import { PrincipalScreen, SobreScreen, TimelineScreen } from "../screens"
import Icon from "react-native-vector-icons/FontAwesome5"
import { color } from "../theme"


export const PrincipalTabNavigator = createBottomTabNavigator({
    principal: { screen: PrincipalScreen, navigationOptions: { title: "Principal"} },
    timeline: { screen: TimelineScreen, navigationOptions: { title: "História"} },
    sobre: { screen: SobreScreen, navigationOptions: { title: "Sobre"} }
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarOptions: {
          showLabel: true
        },
        tabBarIcon: ({ focused }) => {
          const { routeName } = navigation.state
          let icon
          switch (routeName) {
            case "principal":
              icon = "bell"
              break
            case "timeline":
              icon = "stream"
              break
            case "sobre":
              icon = "info"
              break
          }
          return <Icon name={icon} color={focused ? color.palette.primaria : color.palette.lightGrey} size={18} />  
        }
    })
  }
)