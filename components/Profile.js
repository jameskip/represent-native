import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = { member: '' }
    this.profileInfo = this.props.navigation.state.params.item
  }

  componentWillMount () {
    return fetch(
      `https://api.propublica.org/congress/v1/members/${this.profileInfo.id}.json`,
      { headers: { 'X-API-Key': 'JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx' } }
    )
      .then(member => member.json())
      .then(memberJson => {
        this.setState({ member: memberJson })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    console.log('this.profileInfo', this.profileInfo)
    console.log('this.state.member =====> ', this.state.member)
    return (
      <View>
        <Text style={styles.header}>{this.profileInfo.first_name} {this.profileInfo.last_name}</Text>
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
