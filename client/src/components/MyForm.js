import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

// Import icon
import { AntDesign } from '@expo/vector-icons'

const MyForm = (props) => {
  const { name } = props;

  return (
    <View style={Styles.container}>
      <TextInput
        placeholder="Input email"
        style={Styles.input}
      />
      <TextInput
        placeholder="Input password"
        style={Styles.input}
      />

      <TouchableOpacity style={Styles.buttonContainer}>
        <Text style={Styles.buttonText} >{name}</Text>
      </TouchableOpacity>

      <TouchableOpacity><Text style={Styles.noAccount}>
        You don't have an account ? Create a new account
        </Text></TouchableOpacity>

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