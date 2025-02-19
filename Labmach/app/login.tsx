import React,{useEffect} from 'react';
import { TextInput, TouchableOpacity, ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';

const LoginScreen = () => {

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [error, onChangeError] = React.useState('');

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground source={require('@/assets/images/login.png')} style={styles.loginbackground}>
                <View style={{justifyContent:'center', flex: 3}}>
                    <Text style={styles.logintextheading}>LaBmAcH</Text>
                </View>
                <View style={{justifyContent:'center', flex: 3}}>
                    <Text style={styles.logintextbody}>Login or Register to access content</Text>
                </View>
                <View style={{justifyContent: 'space-evenly', flex: 4}}>
                    <TextInput
                        style={styles.logininput}
                        placeholder="Email"
                        onChangeText={onChangeEmail}
                        value={email}
                        textAlign='center'
                    />
                    <TextInput
                       secureTextEntry={true}
                       style={styles.logininput}
                       placeholder="Password"
                       onChangeText={onChangePassword}
                       value={password}
                       textAlign='center'
                    />
                </View>
                <View style={{justifyContent:'flex-start', flex: 4}}>
                    <TouchableOpacity
                        style={styles.loginbutton}>
                        <Text style={styles.logintextbutton}>Login</Text>
                    </TouchableOpacity>
                    <Text style={{color: 'red', fontSize: 10, textAlign: 'center'}}>{error}</Text>
                </View>
                <View style={{justifyContent:'space-evenly', flex: 3}}>
                    <Text style={styles.logintextbody}>New to LaBmAcH?</Text>
                    <TouchableOpacity
                        style={styles.loginbutton}>
                        <Text style={styles.logintextbutton}>Register</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    loginbackground: {
      flex: 1,
      resizeMode: "cover"
    },
    logintextheading: {
        color: "white",
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center",
    },
    logintextbody: {
          color: "white",
          fontSize: 20,
          textAlign: "center",
    },
    logininput: {
      alignSelf: 'center',
      backgroundColor: "white",
      borderRadius: 10,
      borderWidth: 1,
      height: 50,
      width: 350,
      fontSize: 20
    },
    loginbutton: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: "lightskyblue",
        borderRadius: 10,
        borderWidth: 1,
        height: 50,
        width: 150
    },
    logintextbutton: {
      color: "darkblue",
      fontSize: 20,
      textAlign: "center"
    }
  });