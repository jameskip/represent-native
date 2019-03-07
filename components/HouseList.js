import React, { Component } from 'react'
import { Platform, StyleSheet, FlatList, Text, View } from 'react-native'

export default class Senators extends Component {
  constructor (props) {
    super(props)
    this.state = { house: '' }
  }

  componentDidMount () {
    return fetch(
      'https://api.propublica.org/congress/v1/102-115/house/members.json',
      { headers: { 'X-API-Key': 'JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx' } }
    )
      .then(house => house.json())
      .then(houseJson => {
        console.log(houseJson.results[0].members)
        this.setState({ house: houseJson.results[0].members })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    console.log('From house render:  ', this.state.house[0])
    let something = this.state.house
    if (!something) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    } else {
      return (

        <View style={styles.container}>
          <Text style={styles.header}>Congress</Text>

          <FlatList
            keyExtractor={item => item.id}
            data={something}
            renderItem={({ item }) =>
              <Text style={styles.item}>
                {`${item.first_name} ${item.last_name}`}
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
    padding: 20,
    marginBottom: 200
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})
