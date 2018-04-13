import {
  ADD_DECK
} from './types'

export const addDeck = title => ({
  type: ADD_DECK,
  title
})