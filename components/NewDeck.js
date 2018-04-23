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
  blue,
  white,
} from '../utils/colors'

import {
  addDeck
} from '../actions/decks'

import {
  saveDeckTitle
} from '../utils/API'

class NewDeck extends Component {
  state = {
    ready: false,
    title: '',
  }

  submitDeck = () => {
    const {
      addDeck,
      navigation
    } = this.props
    
    // Add to redux
    addDeck(this.state.title)
    
    // add to phone storage
    saveDeckTitle(this.state.title)
    
    // redirect to home
    navigation.navigate('Deck', {title: this.state.title})

    // clear local state
    this.setState({ title: '' })
  }

  render() {

    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.pageTitle}>
          What is the name of your new deck?
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Type title of the new deck:"
          onChangeText={(title) => this.setState({ title })}
          value={this.state.title}
          autoCapitalize="words"
        />

        <Button
          onPress={this.submitDeck}
          title="Add Deck"
          color="#841584"
          accessibilityLabel="Create a new deck"
          disabled={!this.state.title ? true : false }
        />

      </KeyboardAvoidingView>
    );
  }

}

const styles = StyleSheet.create({
  iosSubmitBtn: {
    backgroundColor: blue,
    padding: 10,
    borderRadius: 7,
    height: 45,
  },
  AndroidSubmitBtn: {
    backgroundColor: blue,
    padding: 10,
    height: 45,
    borderRadius: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  submitBtnText: {
    color: white,
    fontSize: 22,
  },
})


const mapDispatchToProps = dispatch => ({
  addDeck: (deck) => dispatch(addDeck(deck))
})

export default connect(null, mapDispatchToProps)(NewDeck)