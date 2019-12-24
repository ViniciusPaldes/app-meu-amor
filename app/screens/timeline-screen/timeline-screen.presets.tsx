import { StyleSheet, ColorPropType } from "react-native"
import { color } from "../../theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 65,
    backgroundColor: 'white'
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingRight: 50
  },
  image: {
    borderRadius: 25,
    height: 50,
    width: 50
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  textDescription: {
    color: 'gray',
    marginLeft: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.palette.primaria
  }
})
