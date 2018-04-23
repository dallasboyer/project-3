import {
  AsyncStorage,
} from 'react-native'

import {
  Permissions,
  Notifications
} from 'expo'

export const DECK_KEY = 'project3:decks'
export const NOTIFICATION_KEY = 'project3:notifications'

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

const initialData = () => {
  AsyncStorage.setItem(DECK_KEY, JSON.stringify(initData))
  return initData
}

// // NOTE this works, keep for future reference
// export const getDeck = (title) => {
//   return AsyncStorage.getItem(DECK_KEY)
//     .then((results) => {
//       const decks = JSON.parse(results)
//       return decks[title]
//     })
// }

export const getDecks = () => {
  // clearData();
  return AsyncStorage.getItem(DECK_KEY).then(formatDeckResults)
}

const formatDeckResults = (results) => {
  return results === null ? initialData() : JSON.parse(results)
}

export const saveDeckTitle = (title) => {
  return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
    [title]: { title: title }
  }));
}

export const addCardToDeck = (title, card) => {
  return AsyncStorage.getItem(DECK_KEY)
    .then((results) => {
      let decks = JSON.parse(results)
      
      decks[title].cards
        ? decks[title].cards.push(card)
        : decks[title] = {
          title: title,
          cards: decks[title].cards && decks[title].cards.length
            ?
            decks[title].cards.concat(card)
            :
            [card]
          }

      console.log("from API, New Deck = ", decks[title])

      AsyncStorage.setItem(DECK_KEY, JSON.stringify(decks))
    })
}

// NOTIFICATIONS SECTION
export const clearNotifications = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(Notifications.cancelAllScheduledNotificationsAsync())
}

const createNotification = () => {
  return {
    title: "Take your daily Quiz!",
    body: "Don't forget to take your daily quiz!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true,
    }
  }
}

export const setNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY) // get all notifications
    .then(JSON.parse) // pass returned data into parse()
    .then((data) => {
      if (data === null) { // if no notifications exist
        Permissions.askAsync(Permissions.NOTIFICATIONS) // ask for permissions to set notifications
          .then(({ status }) => {
            if (status === 'granted') { // if granted, clear any notification
              Notifications.cancelAllScheduledNotificationsAsync()

              // let tomorrow = new Date(2018, 3, 18, 18, 52, 0, 0)
              // OR
              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(8)
              tomorrow.setMinutes(0)
              tomorrow.setSeconds(0)

              Notifications.scheduleLocalNotificationAsync( // set notification
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true)) // add notification to phone storage
            }
          })
      }
    })
}