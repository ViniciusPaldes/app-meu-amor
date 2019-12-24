import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Image } from "react-native"
import { Screen, Text } from "../../components"
// import { useStores } from "../models/root-store"
import { color } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import Timeline from 'react-native-timeline-flatlist'
import { styles } from "./timeline-screen.presets"
import Icon from "react-native-vector-icons/FontAwesome5"

export interface TimelineScreenProps extends NavigationScreenProps<{}> {
}

const ROOT: ViewStyle = {
 
}

const data = [
  {
    time: '2011',
    title: 'Unibeer',
    description: 'Quem diria que aquele estabanado iria se apaixonar por você.',
    lineColor: '#009688',
    icon: <Icon name="star" size={12} color={color.palette.primaria}/> ,
    imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
  },
  {
    time: '2011',
    title: 'Garota Carioca',
    description: 'Nos reencontramos no garota carioca, ai foi o ',
    icon: require('../../img/badminton.png'),
    imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
  },
  {
    time: '2012',
    title: 'Início do namoro',
    description: 'Após 5 meses juntos, Na frente da casa do vizinho da Tati, te chamei para conversar e te pedi em namoro.',
    lineColor: '#009688',
    icon: require('../../img/soccer.png'),
    imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
  },
  {
    time: '2014',
    title: 'Go to Fitness center',
    description: 'Look out for the Best Gym & Fitness Centers around me :)',
    icon: require('../../img/dumbbell.png'),
    imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
  },
  {
    time: '2015',
    title: 'Go to Fitness center',
    description: 'Look out for the Best Gym & Fitness Centers around me :)',
    icon: require('../../img/dumbbell.png'),
    imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
  },
  {
    time: '2016',
    title: 'Go to Fitness center',
    description: 'Look out for the Best Gym & Fitness Centers around me :)',
    icon: require('../../img/dumbbell.png'),
    imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
  },
  {
    time: '2017',
    title: 'Noivado',
    description: 'Look out for the Best Gym & Fitness Centers around me :)',
    icon: require('../../img/dumbbell.png'),
    imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
  },
  {
    time: '2018',
    title: 'Casamento',
    description: 'Look out for the Best Gym & Fitness Centers around me :)',
    icon: require('../../img/dumbbell.png'),
    imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
  }
]

export const TimelineScreen: React.FunctionComponent<TimelineScreenProps> = observer((props) => {
  // const { someStore } = useStores()

  const onEventPress = (data) => {
    // this.setState({selected: data})
  }

  const renderSelected = () => {
    // if(this.state.selected)
    //   return <Text style={{marginTop:10}}>Selected event: {this.state.selected.title} at {this.state.selected.time}</Text>
  }

  const renderDetail = (rowData, sectionID, rowID) => {
    const title = <Text style={styles.title}>{rowData.title}</Text>
    let desc = null
    if (rowData.description && rowData.imageUrl) {
      desc = (
        <View style={styles.descriptionContainer}>
          <Image source={{ uri: rowData.imageUrl }} style={styles.image}/>
          <Text style={styles.textDescription}>{rowData.description}</Text>
        </View>
      )
    }

    return (
      <View style={{ flex: 1 }}>
        {title}
        {desc}
      </View>
    )
  }

  return (
    <Screen style={ROOT}>
      <Timeline
        style={styles.list}
        data={data}
        circleSize={20}
        circleColor='rgba(0,0,0,0)'
        lineColor='rgb(45,156,219)'
        timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
        timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13 }}
        descriptionStyle={{ color: 'gray' }}
        options={{
          style: { paddingTop: 5 }
        }}
        innerCircle={'icon'}
        onEventPress={onEventPress}
        renderDetail={renderDetail}
      />
    </Screen>
  )
})
