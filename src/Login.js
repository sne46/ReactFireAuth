import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import firebase from 'react-native-firebase';
import styles from './style'

export default class Login extends Component {
  state = { email: '', password: '', errorMessage: null }
 handleLogin = () => {

  if (this.state.email != '' || this.state.password != ''){
   firebase
     .auth()
     .signInWithEmailAndPassword(this.state.email, this.state.password)
     .then(() => this.props.navigation.navigate('Home'))
     .catch(error => this.setState({ errorMessage: error.message }))
  }
  else{
    alert("Please Aggree to the Policy to continue!")
  }
 }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'#300158', fontSize: 40}}>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText ={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText  ={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button  title="Login" color="#300158"  onPress  = {this.handleLogin} />
        <View>
        <Text style={{marginTop: 15}}> Don't have an account? <Text onPress ={() => this.props.navigation.navigate('SignUp')} style={{color:'#300158', fontSize: 18}}> Sign Up </Text></Text>
        </View>
      </View>
    )
  }
}