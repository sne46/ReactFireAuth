import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';

export default class Loading extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Home' : 'SignUp')
    })
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'#197657', fontSize: 40}}>Loading</Text>
        <ActivityIndicator color='#197657' size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});