import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const getSenatorsFromApi = async () => {
  try {
    let response = await fetch(
    );
    let responseJson = await response.json();
    // console.log({responseJson})
    return responseJson.results;
  } catch (error) {
    console.error(error);
  }
}

export default class Senators extends Component {
  constructor(props) {
    super(props)

    this.getSenatorsFromApi = getSenatorsFromApi.bind(this)

    this.state = { response: ''}
  }

  componentDidMount() {
    return fetch('https://api.propublica.org/congress/v1/80-115/senate/members.json',
      {"headers": {"X-API-Key": "JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx"}}
    )
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.results[0].members)
      this.setState({response: responseJson.results[0].members})
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render () {
    console.log('from render ', this.state.response)
    return (
      <View>
        <Text>{JSON.stringify(this.state.response)}</Text>
      </View>
    )
  }
}