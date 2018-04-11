import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native'

import {
  TabNavigator,
  StackNavigator
} from 'react-navigation'

import {
  blue,
  white,
} from './utils/colors'

// NOTE example usage of Dimensions API
// import { Dimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');

import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'
import CustomStatusBar from './components/CustomStatusBar'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'All Decks',
      // tabBarIcon: () => <Icon />
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      // tabBarIcon: () => <Icon />
    },
  }
},
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? blue : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : blue,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)

const MainNavigator = StackNavigator({
  DeskList: {
    screen: Tabs,
  },
  NewDeck: {
    screen: Tabs,
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
  },
})

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>

        <CustomStatusBar
          backgroundColor={blue}
          barStyle="light-content"
        />

        <MainNavigator />

      </View>
    )
  }
}

export default App