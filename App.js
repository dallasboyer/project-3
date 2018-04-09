import React, { Component } from 'react'

import {
  Text,
  View,
} from 'react-native'

import {
  blue,
  white,
} from './utils/colors'

// NOTE example usage of Dimensions API
// import { Dimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');

import CustomStatusBar from './components/CustomStatusBar'

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>

        <CustomStatusBar
          backgroundColor={blue}
          barStyle="light-content"
        />

        <Text>Placeholder Text</Text>

      </View>
    )
  }
}

export default App