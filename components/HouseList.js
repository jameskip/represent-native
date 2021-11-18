import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  View,
} from 'react-native'

const House = (props) => {
  const [house, setHouse] = useState('')

  const getHouse = async () => {
    let response = await fetch(
      'https://api.propublica.org/congress/v1/117/house/members.json',
      {
        headers: {
          'X-API-Key': 'JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx',
        },
      },
    )
    response = await response.json()
    setHouse(response.results[0].members)
  }

  useEffect(() => getHouse(), [])

  let isRefreshing = house.length > 1 ? false : true

  return (
    <View style={styles.container}>
      <Text style={styles.header}>House</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={house}
        refreshing={isRefreshing}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              props.navigation.navigate('Profile', { item: item })
            }
          >
            <Text style={styles.name}>
              {`${item.first_name} ${item.last_name}`}
              <Text style={styles.party}>{`    ${item.party}`}</Text>
            </Text>
            <Text style={styles.subtext}>{`${item.title}`}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default House

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: 20,
  },
  item: {
    paddingLeft: 10,
    paddingBottom: 30,
    height: 50,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingBottom: 10,
  },
  name: {
    fontSize: 18,
  },
  subtext: {
    fontSize: 14,
    color: 'gray',
  },
  party: {
    fontSize: 10,
    color: 'gray',
  },
})
