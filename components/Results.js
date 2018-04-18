import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

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
      
        <View style={styles.pageTitle}>
          <Text>RESULTS</Text>
          <Text>{`Grade: ${(this.props.navigation.state.params.metrics.score/this.props.navigation.state.params.metrics.total)*100}`}</Text>
        </View>

        <View>
          <Text>{`Your Score: ${this.props.navigation.state.params.metrics.score}`}</Text>
        </View>

        <View>
          <Button
            onPress={() => {
               this.props.navigation.goBack()
              }
            }
            title="Reset Quiz"
            // color="#841584"
            accessibilityLabel="Grade your quiz"
          />
          
          <Button
            onPress={() => {

              this.props.navigation.navigate('Deck', { deck: this.props.navigation.state.params.deck })
            }}


            title="Back to Deck"
            // color="#841584"
            accessibilityLabel="Return to deck"
          />
        </View>

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