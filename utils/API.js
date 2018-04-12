import {
  AsyncStorage,
} from 'react-native'

export const DECK_KEY = 'project3:decks'

// export function apiSaveTitle(deckName) {
//   const obj = JSON.stringify(deckName);
//   return AsyncStorage.mergeItem(FLASHCARD_KEY, obj);
// }

export const createDeck = (title, deck) => {
  return AsyncStorage.setItem(DECK_KEY, JSON.stringify({
    [title]: deck
  }))
}