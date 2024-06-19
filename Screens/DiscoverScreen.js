import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DiscoverScreen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  text: {
    color: 'white'
  },
  container: {
    paddingLeft: 10
  }
})
export default DiscoverScreen