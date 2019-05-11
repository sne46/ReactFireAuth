import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import firebase from 'react-native-firebase'

export default class Main extends React.Component {
  _isMounted = false;
  state = { currentUser: null }

  componentDidMount() {
    this._isMounted = true;
    const { currentUser } = firebase.auth()

    this.setState({ currentUser })
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
