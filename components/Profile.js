import React, { useState } from 'react'
import { StyleSheet, View, Text, Linking } from 'react-native'

const Profile = (props) => {
  const [member] = useState(props.navigation.state.params.item)

  return (
    
    <View style={styles.container}>
      <Text style={styles.header}>{member.first_name} {member.last_name}</Text>
      <Text style={styles.subheader}>{member.title}</Text>
      {/* // TODO: Create function to hide link if it is null */}
      <Text style={styles.social}>
        <Text onPress={() => { Linking.openURL(`https://twitter.com/${member.twitter_account}`) }}>twitter  </Text>
        <Text onPress={() => { Linking.openURL(`https://facebook.com/${member.facebook_account}`) }}>facebook  </Text>
        <Text onPress={() => { Linking.openURL(`https://youtube.com/${member.youtube_account}`) }}>youtube  </Text>
        <Text onPress={() => { Linking.openURL(`${member.url}`) }}>website  </Text>
        <Text onPress={() => { Linking.openURL(`tel:${member.phone}`) }}>phone  </Text>
      </Text>
    </View>

  )
}

export default Profile

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