import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TextInput,
  AsyncStorage,
  KeyboardAvoidingView
} from 'react-native'

import {
  blue,
  white,
} from '../utils/colors'

const SubmitBtn = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={
        Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn
      }
      onPress={onPress}
    >
      <Text style={styles.submitBtnText}>
        SUBMIT
      </Text>
    </TouchableOpacity>
  )
}

class NewDeck extends Component {
  state = {
    title: '',
  }

  submitDeck = () => {
    console.log(`Submitted new deck titled: ${this.state.title}`)
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

        <SubmitBtn
          style={styles.submitBtnText}
          onPress={this.submitDeck}
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

export default NewDeck