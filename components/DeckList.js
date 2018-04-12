import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button
} from 'react-native'

import sortBy from 'sort-by'

class DeckList extends Component {
  render() {

    const decksInAlphabeticalOrder = this.props.decks && Object.values(this.props.decks).length
      ?
        Object.values(this.props.decks).sort(sortBy("title"))
      :
        (null)

    console.log("REDUX Decks in alphabetical order: ", decksInAlphabeticalOrder)

    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>All Decks</Text>

        {decksInAlphabeticalOrder && decksInAlphabeticalOrder.length
          ?
            (<FlatList
              data={decksInAlphabeticalOrder}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Deck', { deck: item })}>
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
            />)
          :
          (<View>
            <Text>No Decks are available, create one:</Text>
            <Button
              onPress={() => this.props.navigation.navigate('NewDeck')}
              title="Create a Deck"
              // color="#841584"
              accessibilityLabel="Create a new Deck"
            />
          </View>)
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

const mapStateToProps = (state, props) => {
  return {
    decks: state.decks.decks,
  }
}

export default connect(mapStateToProps, null)(DeckList)