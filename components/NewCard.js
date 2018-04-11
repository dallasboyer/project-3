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

class NewCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  // // NOTE for reference only
  // static navigationOptions = ({ navigation }) => {
  //   const { deck } = navigation.state.params
  //   return {
  //     title: `Add a new card`
  //   }
  // }
  static navigationOptions = () => {
    return {
      title: `Add a new card`
    }
  }

  submitDeck = () => {
    console.log(`Submitted a new card that asks: ${this.state.question}, whos answer is: ${this.state.answer}`)
    this.setState({ 
      question: '',
      answer: '',
    })
  }

  render() {

    return (
      <KeyboardAvoidingView style={styles.container}>

        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Question:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter question"
            onChangeText={(question) => this.setState({ question })}
            value={this.state.question}
            autoCapitalize="words"
          />
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Answer:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter answer"
            onChangeText={(answer) => this.setState({ answer })}
            value={this.state.answer}
            autoCapitalize="words"
          />
        </View>

        <SubmitBtn
          style={styles.submitBtnText}
          onPress={this.submitDeck}
        />

        {/* <View>
          <Text>{!this.state.question ? 'No question' : this.state.question}</Text>
          <Text>{!this.state.answer ? 'No answer' : this.state.answer}</Text>
        </View> */}
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  inputSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 20,
  },
  input: {
    height: 70,
    minWidth: '90%',
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
  },
})

export default NewCard