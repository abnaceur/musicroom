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

const MyForm = () => {
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
                    <Text style={Styles.buttonText} >Login</Text>
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
  }
})

export default MyForm;