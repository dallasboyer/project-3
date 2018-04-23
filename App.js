import React, { Component } from 'react'

import { Provider } from 'react-redux'
import store from './store'

import {
  View
} from 'react-native'

import {
  blue
} from './utils/colors'

import MainNavigator from './routes'
import CustomStatusBar from './components/CustomStatusBar'

import {
  setNotification
} from './utils/API'

class App extends Component {
  componentDidMount(){
    setNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>

          <CustomStatusBar
            backgroundColor={blue}
            barStyle="light-content"
          />

          <MainNavigator />

        </View>
      </Provider>
    )
  }
}

export default App