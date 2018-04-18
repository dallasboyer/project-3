import {
  AsyncStorage,
} from 'react-native'

export const DECK_KEY = 'project3:decks'

const initData = {
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
}

export const clearData = () => {
  return AsyncStorage.clear(DECK_KEY);
}

initialData = () => {
  AsyncStorage.setItem(DECK_KEY, JSON.stringify(initData))
  return initData
}

export const getDecks = () => {
  // clearData();
  return AsyncStorage.getItem(DECK_KEY).then(results => {

    return results === null ? initialData() : JSON.parse(results)
    
  })
}

export const test_getDecks = () => {
  // clearData();
  return AsyncStorage.getItem(DECK_KEY).then(test_formatDeckResults)
}

export const test_formatDeckResults = (results) => {
  return results === null ? initialData() : JSON.parse(results)
}

export const saveDeckTitle = (title) => {
  return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify(title));
}

export const createDeck = (title) => {
  return AsyncStorage.setItem(DECK_KEY, JSON.stringify({
    [title]: { title: title }
  }))
}

export const addCardToDeck = (title, card) => {
  return AsyncStorage.getItem(DECK_KEY)
  .then((results) => {
    const decks = JSON.parse(results)
    // let newDeck = decks[title].cards.push(card)
    let newDeck = decks[title].cards.concat(card)
    AsyncStorage.setItem(DECK_KEY, JSON.stringify(newDeck))
  })
}