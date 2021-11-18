import React, { Component } from 'react'
 import { StyleSheet, ScrollView } from 'react-native'
 import SenateList from './SenateList.js'
 import HouseList from './HouseList.js'
 
 export default class RepContainer extends Component {
  static navigationOptions = {
    title: 'Represent.',
  }
 
  render() {
    return (
      <ScrollView style={styles.container}>
        <SenateList navigation={this.props.navigation} style={styles.senate}/>
        <HouseList navigation={this.props.navigation} style={styles.house}/>
      </ScrollView>
    )
  }
 }
 
 const styles = StyleSheet.create({
   container: {
     alignContent: 'center',
     backgroundColor: 'white',
   },
   senate: {
     alignContent: 'center',
     textAlign: 'center',
     margin: 10,
   },
   house: {
     textAlign: 'center',
     marginBottom: 5,
   },
 })