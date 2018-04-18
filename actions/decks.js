import {
  RECEIVE_DECKS,
  ADD_DECK,
  ADD_CARD
} from './types'

export const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
})

export const addDeck = title => ({
  type: ADD_DECK,
  title
})

export const addCard = (title, card) => ({
  type: ADD_CARD,
  title,
  card
})