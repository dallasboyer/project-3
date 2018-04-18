import React, { Component } from 'react'

import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
      title: `${deck.title} Deck`
    }
  }

  // componentWillReceiveProps(nextProps){
  //   this.props.navigation.state.params.deck.cards.length !== nextProps.navigation.state.params.deck.cards.length && this.props.navigation.state.params.deck.cards = this.props.navigation.state.params.deck.cards.length + 1;
  // }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.deckHeader}>

          <Text style={styles.title}>
            {`${this.props.navigation.state.params.deck.title}`}
          </Text>

          <Text style={styles.cardCount}>
            {this.props.navigation.state.params.deck.cards && this.props.navigation.state.params.deck.cards.length ? `${this.props.navigation.state.params.deck.cards.length} cards` : `No cards available`}
          </Text>

        </View>

        <Button
          onPress={() => this.props.navigation.navigate('NewCard', { deck: this.props.navigation.state.params.deck })}
          title="Add Card"
          // color="#841584"
          accessibilityLabel="Add a new card to this deck"
        />

        {this.props.navigation.state.params.deck.cards && this.props.navigation.state.params.deck.cards.length
          ? 
            (<Button
              onPress={() => this.props.navigation.navigate('Quiz', { deck: this.props.navigation.state.params.deck })}
              title="Start Quiz"
              color="#841584"
              accessibilityLabel="Start quizing yourself on this deck"
            />)
          :
            (null)  
        }

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
  deckHeader: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    minWidth: '90%',
    maxHeight: 100,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: 'black',
  },
  title: {
    fontSize: 20,
  },
  cardCount: {
    color: 'red',
  },
})

export default Deck