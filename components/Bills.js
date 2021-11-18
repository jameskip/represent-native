import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Bills = () => {
  const [bills, setBills] = useState([])

  return (
    <View style={styles.container}>
      <Text>Bills</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
