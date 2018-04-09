import React, { Component } from 'react'

import {
  Text,
  View,
  StyleSheet
} from 'react-native'

class DeckList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>DeckList.js</Text>
      </View>
    )
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
    textAlign: 'center',
    fontSize: 40,
  },
})

export default DeckList