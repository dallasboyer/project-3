import React, { Component } from 'react'

import {
  StyleSheet,
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
      <View style={styles.container}>
        <Text style={styles.cardHeader}>{`0/${this.props.navigation.state.params.deck.cards.length}`}</Text>
        {/* <Text>{`0/${this.props.navigation.state.params.deck.cards.length}`}</Text> */}
        <Text>Quiz.js</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHeader: {
    alignSelf: 'flex-start',
    fontSize: 20,
    margin: 10,
  }
})

export default Quiz