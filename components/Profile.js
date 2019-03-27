import React, { Component } from 'react'
import { StyleSheet, View, Text, Linking } from 'react-native'

export default class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = { member: '' }
    this.profileInfo = this.props.navigation.state.params.item
  }

  render () {
    console.log('this.profileInfo', this.profileInfo)
    return (
      <View style={styles.container}>

        <Text style={styles.header}>{this.profileInfo.first_name} {this.profileInfo.last_name}</Text>
        <Text style={styles.subheader}>{this.profileInfo.title}</Text>
        {/* // TODO: Create function to hide link if it is null */}
        <Text style={styles.social}>
          <Text onPress={() => { Linking.openURL(`https://twitter.com/${this.profileInfo.twitter_account}`) }}>twitter  </Text>
          <Text onPress={() => { Linking.openURL(`https://facebook.com/${this.profileInfo.facebook_account}`) }}>facebook  </Text>
          <Text onPress={() => { Linking.openURL(`https://youtube.com/${this.profileInfo.youtube_account}`) }}>youtube  </Text>
          <Text onPress={() => { Linking.openURL(`${this.profileInfo.url}`) }}>website</Text>
        </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    position: 'absolute'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  subheader: {
    fontSize: 14,
    paddingLeft: 10,
    color: 'gray'
  },
  social: {
    paddingLeft: 10
  }
})
