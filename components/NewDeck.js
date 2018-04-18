import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TextInput,
  AsyncStorage,
  KeyboardAvoidingView,
  Button
} from 'react-native'

import {
  blue,
  white,
} from '../utils/colors'

import {
  addDeck,
} from '../actions/decks'

import {
  createDeck,
  // saveDeckTitle
} from '../utils/API'

const SubmitBtn = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={
        Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn
      }
      onPress={onPress}
    >
      <Text style={styles.submitBtnText}>
        Add Deck
      </Text>
    </TouchableOpacity>
  )
}

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

    // clear local state
    this.setState({ title: '' })

    
    // add to phone storage
    createDeck(this.state.title).then(results => console.log("Create Deck Results", results))
    
    // redirect to home
    navigation.navigate('DeckList')
    
    // add to phone storage
    // saveDeckTitle(this.state.title).then(results => console.log("Create Deck Results", results))

    // TODO clear local notifications then set it
    // clearLocalNotification()
    //   .then(setLocalNotification)

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

        {/* <SubmitBtn
          style={styles.submitBtnText}
          onPress={this.submitDeck}

        /> */}

        <Button
          onPress={this.submitDeck}
          title="Add Deck"
          color="#841584"
          accessibilityLabel="Create a new deck"
          disabled={!this.state.title ? true : false }
        />

        <Text>
          {!this.state.title ? 'No Title' : this.state.title}
        </Text>
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