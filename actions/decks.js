import {
  ADD_DECK,
  ADD_CARD,
  FETCH_DECKS_REQUEST,
  FETCH_DECKS_SUCCESS,
  FETCH_DECKS_FAILURE,
} from './types'

import * as API from '../utils/API'

export const addDeck = title => ({
  type: ADD_DECK,
  title
})

export const addCard = (title, card) => ({
  type: ADD_CARD,
  title,
  card
})

export const test_addDeck = title => ({
  type: TEST_ADD_DECK,
  title
})
export const saveDeckTitle = title => dispatch => {

  // post = {
  //   ...post,
  //   id: Helpers.createObjectId(),
  //   timestamp: Date.now()
  // }

  // TODO set up new deck here, then pass it in
  // return API.createDeck(title)
  //   .then(title => dispatch(test_addDeck(title)))
  return API.saveDeckTitle(title)
    .then(title => dispatch(test_addDeck(title)))
}

export const getDecksRequest = () => ({
  type: FETCH_DECKS_REQUEST
})
export const getDecksSuccess = decks => ({
  type: FETCH_DECKS_SUCCESS,
  decks
})
export const getDecksFailure = error => ({
  type: FETCH_DECKS_FAILURE,
  error
})
export const getDecks = () => dispatch => {
  dispatch(getDecksRequest())
  return API.getDecks()
    .then(decks => dispatch(getDecksSuccess(decks)))
    .catch(error => dispatch(getDecksFailure(error)))
}