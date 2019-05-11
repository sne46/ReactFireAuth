import React, { Component } from "react";
import { StyleSheet,Alert, Text, TextInput, View, Button, TouchableOpacity,Modal, TouchableHighlight,CheckBox  } from 'react-native'
import firebase from 'react-native-firebase';
import styles from './style'

export default class signUp extends Component {
  state = {modalVisible: false, email: '', password: '', errorMessage: null, check: false }


checkBoxTest(){
this.setState({
  check:!this.state.check
})

}
  handleSignUp = () => {

    if(this.state.check){
     // alert("Value true")
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({ errorMessage: error.message }))
    }
    else{
      alert("Please Agree to the Policy to continue!")
    }
  }

  setModalVisible(visible) {
    if (this.state.email != '' || this.state.password != ''){
    this.setState({modalVisible: visible});
    }
    else{
      alert("Please enter Credentials!")
    }
  }


render() {
    return (
      <View style={styles.container}>
      <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View style={{marginTop: 0,padding:50}}>
            <View>
              <Text  style={{color:'#197657', fontSize: 20}}>Privacy Policy</Text>
              <Text style={{marginTop: 20}} >Please read this policy and agree to continue bhja adhbd abshdb dasb bshdbashbda abahbdasb dasbdhasbd ahbshdba bdab !</Text>
              <View style={{ flexDirection: 'row' }}>
              <CheckBox  title="I Agree!" value={this.state.check} onChange={() =>this.checkBoxTest()} />
              <Text style={{marginTop: 6}}> I Agree.</Text>
              </View>

           {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
              {this.state.errorMessage}
             </Text>}
              <TouchableHighlight style={{marginTop: 20}} underlayColor = {'red'} onPress  ={this.handleSignUp}>
            <Text style = {styles.button}>
               Accept
            </Text>
            </TouchableHighlight>
            <TouchableHighlight style={{marginTop: 20}} underlayColor = {'red'} onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
            <Text style = {styles.button}>
               Cancel
            </Text>
            </TouchableHighlight>

            </View>
          </View>
        </Modal>
      <Text style={{color:'#197657', fontSize: 40}}>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText  ={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText ={password => this.setState({ password })}
          value={this.state.password}
        />

        <TouchableHighlight underlayColor = {'red'}  onPress={() => {
            this.setModalVisible(true);
          }}>
            <Text style = {styles.button1}>
               SIGN UP
            </Text>
         </TouchableHighlight>
        <View>
        <Text style={{marginTop: 15}}> Already have an account? <Text onPress  ={() => this.props.navigation.navigate('Login')} style={{color:'#197657', fontSize: 18}}> Login </Text></Text>
        </View>
      </View>
    )
  }
}