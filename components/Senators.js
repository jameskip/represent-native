import React, { Component } from "react";
import { Platform, StyleSheet, FlatList, Text, View } from "react-native";

export default class Senators extends Component {
  constructor(props) {
    super(props);
    this.state = { response: "" };
  }

  componentDidMount() {
    return fetch(
      "https://api.propublica.org/congress/v1/80-115/senate/members.json",
      { headers: { "X-API-Key": "JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx" } }
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.results[0].members);
        this.setState({ response: responseJson.results[0].members });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    console.log("from render ", this.state.response[0]);
    let something = this.state.response[0]
    if (!something) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    } else {
      return (
        <View>
          {/* <Text>{JSON.stringify(this.state.response)}</Text> */}
          <FlatList
            data={[{ key: something.first_name }, { key: "b" }]}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
        </View>
      );

    }
  }
}
