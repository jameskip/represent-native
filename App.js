/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import SenateList from './components/SenateList.js'
import HouseList from './components/HouseList.js'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView style={styles.container}>
        <SenateList style={styles.senate}/>
        <HouseList style={styles.house}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    backgroundColor: 'white',
    paddingTop: 100
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
});
