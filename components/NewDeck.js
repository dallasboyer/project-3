import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Button
} from 'react-native'

import {
  purple
} from '../utils/colors'

import {
  addDeck
} from '../actions/decks'

import {
  saveDeckTitle
} from '../utils/API'

class NewDeck extends Component {
  state = {
    title: '',
  }

  submitDeck = () => {
    const {
      addDeck,
      navigation
    } = this.props

    const {
      title
    } = this.state
    
    // Add to redux
    addDeck(title)
    
    // add to phone storage
    saveDeckTitle(title)
    
    // redirect to home
    navigation.navigate('Deck', {title: title})

    // clear local state
    this.setState({ title: '' })
  }

  render() {

    const {
      title
    } = this.state

    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.pageTitle}>
          What is the name of your new deck?
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Type title of the new deck:"
          onChangeText={(title) => this.setState({ title })}
          value={title}
          autoCapitalize="words"
        />

        <Button
          onPress={this.submitDeck}
          title="Add Deck"
          color={purple}
          accessibilityLabel="Create a new deck"
          disabled={!title ? true : false }
        />

      </KeyboardAvoidingView>
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
  input: {
    height: 70,
    width: '100%'
  },
})


const mapDispatchToProps = dispatch => ({
  addDeck: (deck) => dispatch(addDeck(deck))
})

export default connect(null, mapDispatchToProps)(NewDeck)