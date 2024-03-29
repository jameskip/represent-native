import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  View,
} from 'react-native'

const Senators = (props) => {
  const [senate, setSenate] = useState('')

  const getSenators = async () => {
    let response = await fetch(
      'https://api.propublica.org/congress/v1/117/senate/members.json',
      {
        headers: {
          'X-API-Key': 'JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx',
        },
      },
    )
    response = await response.json()
    setSenate(response.results[0].members)
  }

  useEffect(() => getSenators(), [])

  let isRefreshing = senate.length > 1 ? false : true

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Senate</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={senate}
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

export default Senators

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
