import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'

export default class Record extends Component {
  constructor (props) {
    super(props)
    this.state = { votingRecord: [] }
  }

  componentWillMount () {
    return fetch(
      `https://api.propublica.org/congress/v1/members/${this.props.id}/votes.json`,
      { headers: { 'X-API-Key': 'JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx' } }
    )
      .then(votingRecord => votingRecord.json())
      .then(votingRecordJson => {
        this.setState({ votingRecord: votingRecordJson.results[0].votes })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    let stringOfText = this.state.votingRecord
    console.log('TCL: Record -> render -> stringOfText', stringOfText)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Record</Text>

        <FlatList showsVerticalScrollIndicator={false} keyExtractor={item => item.bill.bill_id + item.date} data={stringOfText}
          renderItem={({ item }) =>
            <TouchableOpacity style={styles.item} >
              <Text style={styles.subtext}>
                {`${item.description}`}
              </Text>
            </TouchableOpacity>
          }
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20
  },
  item: {
    paddingLeft: 10,
    paddingBottom: 30,
    height: 50
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingBottom: 10
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
