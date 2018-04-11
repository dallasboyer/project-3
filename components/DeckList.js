import React, { Component } from 'react'

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'

class DeckList extends Component {
  render() {

    let testObject = {
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
    }

    console.log("Test Object: ", Object.values(testObject))


    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>DeckList.js</Text>

        <FlatList
          data={Object.values(testObject)}
          renderItem={({ item }) => (
            <View style={styles.deckHeader} key={item.title}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Deck', {deck: item})}>
                <Text>
                  {`Title: ${item.title}`}
                </Text>
                <Text>
                  {`${item.cards.length} cards`}
                </Text>
              </TouchableOpacity>
            </View>
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
    backgroundColor: 'lightgray',
    fontSize: 50,
    width: '100%',
    height: 100,
    marginTop: 10,
    marginBottom: 10,
  },
})

export default DeckList