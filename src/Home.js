import React, {Component}from 'react';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';
import firebase from 'react-native-firebase'


export default class Home extends React.Component {
  state = { currentUser: null }

  handleLogout = () => {
    firebase
    .auth()
    .signOut()
    .then(() => this.props.navigation.navigate('Login'))
    .catch(error => this.setState({ errorMessage: error.message }))
  }

componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
}


render() {
    const { currentUser } = this.state
  return (
      <View style={styles.container}>
        <Text style={{fontSize: 20}}> Welcome </Text>
         <Text style={{color:'#197657', fontSize: 20}}> 
          {currentUser && currentUser.email}!
        </Text>
        <Button title="Logout" color="#197657" onPress  = {this.handleLogout} />

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