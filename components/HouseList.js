import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, FlatList, Text, View } from 'react-native'

export default class Representatives extends Component {
  constructor (props) {
    super(props)
    this.state = { house: '' }
  }

  componentDidMount () {
    return fetch(
      'https://api.propublica.org/congress/v1/115/house/members.json',
      { headers: { 'X-API-Key': 'JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx' } }
    )
      .then(house => house.json())
      .then(houseJson => {
        this.setState({ house: houseJson.results[0].members })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    let isRefreshing = true
    let something = this.state.house

    if (something) {
      isRefreshing = false
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}>House</Text>

        <FlatList keyExtractor={item => item.id} data={something} refreshing={isRefreshing}
          renderItem={({ item }) =>
            <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('Profile', { item: item })}>

              <Text style={styles.name}>
                {`${item.first_name} ${item.last_name}`}
                <Text style={styles.party}>{`    ${item.party}`}</Text>
              </Text>

              <Text style={styles.subtext}>{`${item.title}`}</Text>
            </TouchableOpacity>
          }
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20
  },
  item: {
    paddingLeft: 10,
    paddingBottom: 30,
    height: 50
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingBottom: 10
  },
  name: {
    fontSize: 18
  },
  subtext: {
    fontSize: 14,
    color: 'gray'
  },
  party: {
    fontSize: 10,
    color: 'gray'
  }
})
