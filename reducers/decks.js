import {
  RECEIVE_DECKS,
  ADD_DECK,
  ADD_CARD,
} from '../actions/types'

export const decks = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_DECKS:
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