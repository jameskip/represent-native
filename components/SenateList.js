import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, FlatList, Text, View } from 'react-native'

const Senators = () => {

}
  

const Senators = () => {
  constructor (props) {
    super(props)
    this.state = { senate: '' }
  }

  componentDidMount () {
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

}

export default Senators

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