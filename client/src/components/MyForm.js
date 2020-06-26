import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

// Import icon
import { AntDesign } from '@expo/vector-icons'

// Import context
import { Context as AuthContext } from '../context/AuthContext';

const MyForm = (props) => {
  const { state, signup, signin } = useContext(AuthContext);

  const { name, navigation, isLoggin } = props;
  const [username, setUsername] = useState('');
  const [password, setPasswor] = useState('');
  const [email, setEmail] = useState('');


  return (
    <View style={Styles.container}>

      {!isLoggin ?
        <TextInput
          value={username}
          placeholder="Input username"
          style={Styles.input}
          onChange={e => setUsername(e.target.value)}
        /> : null}

      <TextInput
        placeholder="Input email"
        style={Styles.input}
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <TextInput
        placeholder="Input password"
        style={Styles.input}
        secureTextEntry
        value={password}
        onChange={e => setPasswor(e.target.value)}
      />

      {!isLoggin ?
        <TouchableOpacity
          onPress={() => signup({ username, email, password })}
          style={Styles.buttonContainer}>
          <Text style={Styles.buttonText} >{name}</Text>
        </TouchableOpacity> :
        <TouchableOpacity
          onPress={() => signin({ email, password })}
          style={Styles.buttonContainer}>
          <Text style={Styles.buttonText} >{name}</Text>
        </TouchableOpacity>}



      {isLoggin ?
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
        ><Text style={Styles.noAccount}>
            You don't have an account ? Create a new account
        </Text></TouchableOpacity> :

        <TouchableOpacity
          onPress={() => navigation.push('Signin')}
        ><Text style={Styles.noAccount}>
            You have an account ? go to login
        </Text></TouchableOpacity>}

      <Text style={Styles.txtLine}>___________ OR ____________</Text>

      <TouchableOpacity style={Styles.socialBtn}>
        <Text style={Styles.buttonText} >
          <AntDesign style={Styles.socialMedia} name="google" />
       Google</Text>
      </TouchableOpacity>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    paddingLeft: 20,
    marginBottom: 15
  },

  buttonContainer: {
    backgroundColor: '#27ae60',
    paddingVertical: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  txtLine: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20
  },
  socialBtn: {
    marginTop: 30,
    backgroundColor: '#1f5c9e',
    paddingVertical: 10,
  },
  socialMedia: {
    marginRight: 10,
    fontSize: 20
  },
  noAccount: {
    color: '#fff',
    fontSize: 13,
    marginTop: 10
  }
})

export default MyForm;