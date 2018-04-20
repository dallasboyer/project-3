import {
  ADD_DECK,
  ADD_CARD,
  FETCH_DECKS_REQUEST,
  FETCH_DECKS_SUCCESS,
  FETCH_DECKS_FAILURE,
} from '../actions/types'

export const decks = (state = {}, action) => {

  switch (action.type) {

    case FETCH_DECKS_FAILURE:
      return {
        ...state,
        error,
      }

    case FETCH_DECKS_SUCCESS:
      return {
        ...state,
        decks: {
          ...action.decks
        }
      }

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
      
    case ADD_CARD:
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.title]: {
            ...state.decks[action.title],
            cards: state.decks[action.title].cards && state.decks[action.title].cards.length
              ?
                state.decks[action.title].cards.concat(action.card)
              :
                [action.card]
          }
        }
      }

    default:
      return state
  }

}