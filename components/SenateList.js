import React, { Component } from 'react'
import { Platform, StyleSheet, FlatList, Text, View } from 'react-native'

export default class Senators extends Component {
  constructor (props) {
    super(props)
    this.state = { senate: '' }
  }

  componentDidMount () {
    return fetch(
      'https://api.propublica.org/congress/v1/80-115/senate/members.json',
      { headers: { 'X-API-Key': 'JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx' } }
    )
      .then(senate => senate.json())
      .then(senateJson => {
        this.setState({ senate: senateJson.results[0].members })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    let something = this.state.senate
    if (!something) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    } else {
      return (

        <View style={styles.container}>
          <Text style={styles.header}>Senate</Text>

          <FlatList
            keyExtractor={item => item.id}
            data={something}
            renderItem={({ item }) =>
              <Text style={styles.item} onPress={() => this.props.navigation.navigate('Profile', { item: item })}>
                {`${item.first_name} ${item.last_name} ${item.party}`}
              </Text>
            }
          />

        </View>

      )
    }
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
