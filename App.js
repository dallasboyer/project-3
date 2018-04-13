import React, { Component } from 'react'

import { Provider } from 'react-redux'
import store from './store'

import {
  View
} from 'react-native'

import {
  blue
} from './utils/colors'

// NOTE example usage of Dimensions API
// import { Dimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');

import MainNavigator from './routes'
import CustomStatusBar from './components/CustomStatusBar'

class App extends Component {
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