import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  // Animated
} from 'react-native'

import {
  clearNotifications,
  setNotification
} from '../utils/API'

import {
  red,
  green,
  black
} from '../utils/colors'

class Quiz extends Component {
  constructor(props){
    super(props)
    this.state = {
      index: 0,
      correct: 0,
      incorrect: 0,
      showAnswer: false,
      cards: props.navigation.state.params.deck.cards,
      // opacity: new Animated.Value(0),
      // width: new Animated.Value(0),
      // height: new Animated.Value(0),
    }
  }

  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
      title: `${deck.title} Quiz`
    }
  }

  // // NOTE for reference of Animated
  // componentDidMount(){
  //   const { opacity, width, height } = this.state

  //   Animated.timing(opacity, { toValue: 1, duration: 1000 }).start()
  //   Animated.spring(width, { toValue: '100%', speed: 5 }).start()
  //   Animated.spring(height, { toValue: 40, speed: 5 }).start()
  // }

  componentWillUnmount(){
    this.setState({
      index: 0,
      correct: 0,
      incorrect: 0,
    })
  }

  calcScore = () => {
    let grade = (this.state.correct/this.state.cards.length) * 100
    return grade
  }

  render() {
    // const { opacity, width, height } = this.state
    return (
      <View style={styles.container}>

        {/* Animation Testing */}
        {/* <Animated.Text style={{ opacity, width, height }}>Animation Test</Animated.Text> */}
        
        {/* Counter */}
        <Text style={styles.counter}>{`${this.state.index + 1}/${this.state.cards.length}`}</Text>

        {/* Question/Answer */}
        {this.state.showAnswer
          ? (<Text style={styles.pageTitle}>{`${this.state.cards[this.state.index].answer}`}</Text>)
          : (<Text style={styles.pageTitle}>{`${this.state.cards[this.state.index].question}`}</Text>)
        }   

        {/* Hint */}
        {this.state.showAnswer
          ? (<TouchableOpacity
            onPress={() => {
              this.setState((prevState) => ({
                showAnswer: false,
              }))
            }}>
            <Text style={styles.viewQuestion}>Back to Question</Text>
          </TouchableOpacity>)
          : (<TouchableOpacity
            onPress={() => {
              this.setState((prevState) => ({
                showAnswer: true,
              }))
            }}>
              <Text style={styles.viewAnswer}>View Answer</Text>
            </TouchableOpacity>)
        }

        {/* Correct/Incorrect Buttons */}
        {this.state.showAnswer
          ? (null)
          : (<View>
            <Button
              onPress={() => {
                if (this.state.index + 1 === this.state.cards.length){ // if last card

                  this.setState((prevState) => ({
                    correct: prevState.correct + 1,
                  }))

                  clearNotifications()
                    .then(setNotification)

                  const grade = this.calcScore()

                  this.props.navigation.navigate(
                    'Results',
                    {
                      deck: this.props.navigation.state.params.deck,
                      metrics: {
                        correct: this.state.correct,
                        incorrect: this.state.incorrect,
                        total: this.state.cards.length,
                        grade: grade
                      }
                    })

                  // this.setState({
                  //   index: 0,
                  //   correct: 0,
                  //   incorrect: 0,
                  // })

                } else { // if not last card

                  this.setState((prevState) => ({
                    index: prevState.index + 1,
                    correct: prevState.correct + 1,
                  }))

                }

              }}
              title="Correct"
              color={green}
              accessibilityLabel="Mark, correct, because you know the answer"
            />
            <Button
              onPress={() => {
                if (this.state.index + 1 === this.state.cards.length){ 

                  this.setState((prevState) => ({
                    incorrect: prevState.incorrect + 1,
                  }))

                  clearNotifications()
                    .then(setNotification)

                  const grade = this.calcScore()

                  this.props.navigation.navigate(
                    'Results',
                    { 
                      deck: this.props.navigation.state.params.deck,
                      metrics: {
                        correct: this.state.correct,
                        incorrect: this.state.incorrect,
                        total: this.state.cards.length,
                        grade: grade
                      }
                    })

                  // this.setState({
                  //   index: 0,
                  //   correct: 0,
                  //   incorrect: 0,
                  // })

                } else {

                  this.setState((prevState) => ({
                    index: prevState.index + 1,
                    incorrect: prevState.incorrect + 1,
                  }))

                }

              }}
              title="Incorrect"
              color={red}
              accessibilityLabel="Mark, incorrect, because you do not know the answer"
            />
          </View>)
        }
        
      </View>
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
    fontSize: 30,
  },
  counter: {
    alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: "bold",
  },
  viewQuestion: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red"
  },
  viewAnswer: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red"
  }
})

export default Quiz