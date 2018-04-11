import React, { Component } from 'react'

import {
  Text,
  View
} from 'react-native'

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
      title: `${deck.title} Quiz`
    }
  }

  render() {
    return (
      <View>
        <Text>Quiz.js</Text>
      </View>
    );
  }
}

export default Quiz