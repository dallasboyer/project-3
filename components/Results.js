import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

import {
  black
} from '../utils/colors'

class Results extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
      title: `${deck.title} Quiz`
    }
  }

  render() {
    return (
      <View style={styles.container}>
      
        <View>
          <Text style={styles.pageTitle}>RESULTS</Text>
        </View>

        <View>
          <Text>{`Grade: ${this.props.navigation.state.params.metrics.grade}%`}</Text>          
          <Text>{`Correct: ${this.props.navigation.state.params.metrics.correct}`}</Text>
        </View>

        <Button
          onPress={() => {
            this.props.navigation.navigate(
              'Quiz',
              { deck: this.props.navigation.state.params.deck }
            )
          }}
          title="Reset Quiz"
          // color="#841584"
          color={black}
          accessibilityLabel="Quizing yourself on this deck again"
        />

        <Button
          onPress={() => {
            this.props.navigation.navigate(
              'Deck',
              { deck: this.props.navigation.state.params.deck }
            )
          }}
          title="Back to Deck"
          // color="#841584"
          accessibilityLabel="Return to deck"
        />

      </View>
    );
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

export default Results;