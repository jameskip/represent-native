import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class Profile extends Component {
  render () {
    const profileInfo = this.props.navigation.state.params.item
    return (
      <View>
        <Text style={styles.header}>{profileInfo.first_name} {profileInfo.last_name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})
