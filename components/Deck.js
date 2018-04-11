import React, { Component } from 'react'

import {
  Text,
  View,
  StyleSheet
} from 'react-native'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
      title: `${deck.title} Deck`
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Deck.js {`ID: ${this.props.navigation.state.params.deck.title}`}</Text>

        <Text>
          {JSON.stringify(this.props.navigation.state.params.deck)}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: 40,
  },
})

export default Deck