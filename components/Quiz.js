import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  Button,
  Picker,
  TouchableOpacity
} from 'react-native'

class Quiz extends Component {
  constructor(props){
    super(props)
    this.state = {
      index: 0,
      selectedAnswer: "",
      score: 0,
      showAnswer: false,
      cards: props.navigation.state.params.deck.cards
    }
  }

  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
      title: `${deck.title} Quiz`
    }
  }

  calcScore = () => {
    // TODO calculate score after final card DONE
  }

  render() {
    return (
      <View style={styles.container}>

        {/* Counter */}
        {this.state.showAnswer
          ? (null)
          : (<Text style={styles.counter}>{`${this.state.index + 1}/${this.state.cards.length}`}</Text>)
        }

        {/* Question/Answer */}
        {this.state.showAnswer
          ? (<Text style={styles.pageTitle}>{`${this.state.cards[this.state.index].answer}`}</Text>)
          : (<Text style={styles.pageTitle}>{`${this.state.cards[this.state.index].question}`}</Text>)
        }

        {/* Answers Dropdown */}
        {this.state.showAnswer
          ? (null)
          : (
            <Picker
              selectedValue={this.state.selectedAnswer}
              style={{ height: 70, width: '100%' }}
              onValueChange={(itemValue, itemIndex) => this.setState({ selectedAnswer: itemValue })}
            >
              <Picker.Item label="Select an answer" value="" />
              {this.state.cards.map((card, index) => (
                <Picker.Item key={index} label={card.answer} value={card.answer} />
              ))}
            </Picker>
          )
        }        

        {/* Hint */}
        {/* {this.state.showAnswer
          ? (null)
          : (<Button
            onPress={() => {
              this.setState((prevState) => ({
                showAnswer: true,
                score: prevState.score - 1,
              }))
              console.log("Show me hint ", this.state.cards[this.state.index])
            }}
            title="Hint"
            // color="#841584"
            accessibilityLabel="View the answer to this card"
          />)
        } */}
        {this.state.showAnswer
          ? (null)
          : (<TouchableOpacity
            onPress={() => {
              this.setState((prevState) => ({
                showAnswer: true,
                score: prevState.score - 1,
              }))
            }}>
              <Text style={styles.viewAnswer}>View Answer</Text>
            </TouchableOpacity>)
        }

        {/* Switch Card Buttons */}
        {this.state.index + 1 === this.state.cards.length
          ? (<Button
            onPress={() => {
              this.setState({ index: 0 })    
              this.props.navigation.navigate('Results', { deck: this.props.navigation.state.params.deck, metrics: { score: this.state.score, total: this.state.cards.length } })
            }}

            title="DONE"
            // color="#841584"
            accessibilityLabel="Grade your quiz"
          />)
          : this.state.showAnswer
            ? (<Button
              onPress={() => {
                this.setState({ showAnswer: false })
                console.log("Switched to the front of the card: ")
              }}
              title="BACK"
              // color="#841584"
              accessibilityLabel="Go to the next card"
            />)
            : (<Button
              onPress={() => {

                this.state.selectedAnswer === this.state.cards[this.state.index].answer
                  ? (
                    this.setState((prevState) => ({
                      score: prevState.score + 1,
                      index: prevState.index + 1,
                      selectedAnswer: '',
                    }))         
                  )
                  : (
                    this.setState((prevState) => ({
                      index: prevState.index + 1,
                      selectedAnswer: '',
                    }))        
                  )

              }}
              title="NEXT"
              color="#00ff00"
              accessibilityLabel="Go to the next card"
            />)
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
    fontSize: 40,
  },
  counter: {
    alignSelf: 'flex-start',
    fontSize: 40,
  },
  viewAnswer: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red"
  }
})

export default Quiz