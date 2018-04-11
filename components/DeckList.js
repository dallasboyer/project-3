import React, { Component } from 'react'

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'

import sortBy from 'sort-by'

class DeckList extends Component {
  render() {

    let test_decks = {
      React: {
        title: 'React',
        cards: [
          {
            question: 'What is React',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      Geography: {
        title: 'Geography',
      },
      Farming: {
        title: 'Farming',
        cards: []
      },
      JavaScript: {
        title: 'JavaScript',
        cards: [
          {
            question: 'What is a closure',
            answer: 'The combination of a function and the lexical environment within which that function was declared'
          },
          {
            question: 'What does the spread operator look like',
            answer: '...'
          },
        ]
      },
      Programming: {
        title: 'Programming',
        cards: [
          {
            question: 'What is the best programming language',
            answer: 'Javascript is the best language'
          }
        ]
      },
      Tools: {
        title: 'Tools',
        cards: [
          {
            question: 'What is the most essential tool',
            answer: 'axe'
          },
        ]
      },
      Vocabulary: {
        title: 'Vocabulary',
        cards: [
          {
            question: 'abhorrent',
            answer: 'utterly opposed, or contrary, or in conflict (usually followed by to)'
          },
          {
            question: 'magnanimous',
            answer: 'generous in forgiving an insult or injury; free from petty resentfulness or vindictiveness'
          },
        ]
      },
    }

    const decksInAlphabeticalOrder = Object.values(test_decks).sort(sortBy("title"))
    console.log("Decks in alphabetical order: ", decksInAlphabeticalOrder)

    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>All Decks</Text>

        <FlatList
          data={Object.values(test_decks)}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Deck', {deck: item})}>
              <View style={styles.deckHeader} key={item.title}>
                <Text style={styles.title}>
                  {`${item.title}`}
                </Text>
                <Text style={styles.cardCount}>
                  {item.cards && item.cards.length ? `${item.cards.length} cards` : `No cards available`}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
          
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
    height: 100,
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
  }
})

export default DeckList