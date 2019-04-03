import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, FlatList, Text, View } from 'react-native'

export default class Senators extends Component {
  constructor (props) {
    super(props)
    this.state = { senate: '' }
  }

  componentWillMount () {
    return fetch(
      'https://api.propublica.org/congress/v1/116/senate/members.json',
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
    let isRefreshing = true
    let something = this.state.senate

    if (something) {
      isRefreshing = false
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Senate</Text>

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
    paddingLeft: 10
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
