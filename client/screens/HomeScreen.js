import React, { useContext } from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Image,
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';

// Import context
import { Context as AuthContext } from '../context/AuthContext';


const HomeScreens = (props) => {
    const { signout } = useContext(AuthContext);

    return (
        <KeyboardAvoidingView style={Styles.container}>
            <View style={Styles.logoContainer}>
                <Text style={Styles.title}>Home page</Text>

                <TouchableOpacity
                    onPress={() => signout()}
                >

                    <Text style={Styles.title}>Logout</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282830',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    logoContainer: {
        color: 'white',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#fff',
        marginTop: 20,
        fontWeight: "100",
        fontSize: 23
    },
    myForm: {
        flex: 3
    }
})


export default HomeScreens;