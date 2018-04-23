import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native'

import {
  HeaderBackButton
} from 'react-navigation'

import {
  white
} from '../utils/colors'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const {
      deck
    } = navigation.state.params

    return {
      title: `${deck.title} Deck`,
      headerLeft: <HeaderBackButton tintColor={white} onPress={() => navigation.navigate('DeckList')} />
    }
  }

  render() {
    console.log("DECK TITLE: ", this.props.navigation.state.params.deck.title)

    return (
      <View style={styles.container}>

        <View style={styles.deckHeader}>
          <Text style={styles.title}>
            {`${this.props.deck.title}`}
          </Text>

          <Text style={styles.cardCount}>
            {this.props.deck.cards && this.props.deck.cards.length ? `${this.props.deck.cards.length} cards` : `No cards available`}
          </Text>
        </View>

        <Button
          onPress={() => this.props.navigation.navigate('NewCard', { deck: this.props.deck })}
          title="Add Card"
          // color="#841584"
          accessibilityLabel="Add a new card to this deck"
        />

        {this.props.deck.cards && this.props.deck.cards.length
          ? 
            (<Button
              onPress={() => this.props.navigation.navigate('Quiz', { deck: this.props.deck })}
              title="Start Quiz"
              color="#841584"
              accessibilityLabel="Start quizing yourself on this deck"
            />)
          :
            (null)  
        }

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

const mapStateToProps = (state, { navigation }) => {
  const { deck } = navigation.state.params

  return {
    deck: state.decks.decks[deck.title]
  }
}

export default connect(mapStateToProps, null)(Deck)