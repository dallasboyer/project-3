import {
  ADD_DECK,
} from '../actions/types'

const initState = {
  decks: {
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
    Geography: {
      title: 'Geography',
    },
    Farming: {
      title: 'Farming',
      cards: []
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
    Tools: {
      title: 'Tools',
      cards: [
        {
          question: 'What is the most essential tool',
          answer: 'axe'
        },
      ]
    },
    Vocabulary: {
      title: 'Vocabulary',
      cards: [
        {
          question: 'abhorrent',
          answer: 'utterly opposed, or contrary, or in conflict (usually followed by to)'
        },
        {
          question: 'magnanimous',
          answer: 'generous in forgiving an insult or injury; free from petty resentfulness or vindictiveness'
        },
      ]
    }
  },
}

export const decks = (state = {}, action) => {

  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.title]: {
            title: action.title
          }
        }
      }
    default:
      return state
  }

}