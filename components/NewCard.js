import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
  StyleSheet,
  Text,
  View,
  // TouchableOpacity,
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
  addCard
} from '../actions/decks'

// const SubmitBtn = ({ onPress }) => {
//   return (
//     <TouchableOpacity
//       style={
//         Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn
//       }
//       onPress={onPress}
//     >
//       <Text style={styles.submitBtnText}>
//         SUBMIT
//       </Text>
//     </TouchableOpacity>
//   )
// }

class NewCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  static navigationOptions = () => {
    return {
      title: `Add a new card`
    }
  }

  submitDeck = () => {
    const card = {
      question: this.state.question,
      answer: this.state.answer
    }

    this.props.addCard(this.props.navigation.state.params.deck.title, card)

    this.setState({
      question: '',
      answer: '',
    })
    
    navigation.goBack()
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

        {/* <SubmitBtn
          style={styles.submitBtnText}
          onPress={this.submitDeck}
        /> */}

        <Button
          onPress={this.submitDeck}
          title="Add Card"
          color="#841584"
          accessibilityLabel="Create a new card"
          disabled={!this.state.question || !this.state.answer ? true : false}
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

const mapDispatchToProps = dispatch => ({
  addCard: (title, card) => dispatch(addCard(title, card))
})

export default connect(null, mapDispatchToProps)(NewCard)