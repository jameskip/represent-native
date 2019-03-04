import React, { Component } from "react";
import { Platform, StyleSheet, FlatList, Text, View } from "react-native";

export default class Senators extends Component {
  constructor(props) {
    super(props);
    this.state = { senate: "" };
  }

  componentDidMount() {
    return fetch(
      "https://api.propublica.org/congress/v1/80-115/senate/members.json",
      { headers: { "X-API-Key": "JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx" } }
    )
      .then(senate => senate.json())
      .then(senateJson => {
        console.log(senateJson.results[0].members);
        this.setState({ senate: senateJson.results[0].members });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    console.log("from render ", this.state.senate[0]);
    let something = this.state.senate
    if (!something) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    } else {
      return (
        <View>
          <FlatList
            keyExtractor={item => item.id}
            data={something}
            renderItem={({ item }) => <Text>{`${item.first_name} ${item.last_name}`}</Text>}
          />
        </View>
      );

    }
  }
}
