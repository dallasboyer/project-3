import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

import {
  HeaderBackButton
} from 'react-navigation'

import {
  white,
  black
} from '../utils/colors'

class Results extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
      title: `${deck.title} Quiz`,
      headerLeft: <HeaderBackButton tintColor={white} onPress={() => navigation.navigate('Deck', { title: deck.title})} /> 
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
          color={black}
          accessibilityLabel="Quizing yourself on this deck again"
        />

        <Button
          onPress={() => {
            this.props.navigation.navigate(
              'Deck',
              { title: this.props.navigation.state.params.deck.title }
            )
          }}
          title="Back to Deck"
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