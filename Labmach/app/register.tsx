import React,{useEffect} from 'react';
import { TextInput, Pressable, TouchableOpacity, ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Link } from 'expo-router';

const RegisterScreen = () => {

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [name, onChangeName] = React.useState('');
    const [conpass, onChangeConpass] = React.useState('');
    const [error, onChangeError] = React.useState('');
    const [isSelected, onChangeIsSelected] = React.useState(false);


    return (
        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground source={require('@/assets/images/login.png')} style={styles.loginbackground}>
                <View style={{justifyContent:'space-evenly', flex: 3}}>
                    <Text style={styles.logintextheading}>LaBmAcH</Text>
                </View>
                <View style={{justifyContent: 'space-evenly', flex: 8.5}}>
                    <TextInput
                        style={styles.logininput}
                        placeholder="Full Name"
                        onChangeText={onChangeName}
                        value={name}
                        textAlign='center'
                    />
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
                       textAlign='center'
                       value={password}
                    />
                    <TextInput
                       secureTextEntry={true}
                       style={styles.logininput}
                       placeholder="Confirm Password"
                       onChangeText={onChangeConpass}
                       value={conpass}
                       textAlign='center'
                    />
                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                        <BouncyCheckbox
                            onPress={(isChecked: boolean) => {onChangeIsSelected(isChecked)}}
                        />
                        <Text style={styles.logintextbody}>I agree to the </Text>
                        <Link href='/register'>
                            <Text style={{textDecorationLine: 'underline', color: "white", fontSize: 20, textAlign: "center", fontStyle: 'italic'}}>
                                terms and conditions
                            </Text>
                        </Link>
                    </View>
                </View>
                <View style={{justifyContent:'flex-start', flex: 2.5}}>
                    <Link href='/dashboard'>
                        <Pressable
                            onPress={()=>{
                                if(isSelected && password==conpass && name!=''){
                                }
                                else if(name==''){
                                    onChangeError('Please, enter your name.');
                                }
                                else if(password!=conpass){
                                    onChangeError('Password mismatch! Kindly verify again.');
                                }
                                else{
                                    onChangeError('Please, agree to the Terms and Conditions.');
                                }
                            }}
                            style={styles.loginbutton}>
                            <Text style={styles.logintextbutton}>Register</Text>
                        </Pressable>
                    </Link>
                    <Text style={{color: 'red', fontSize: 10, textAlign: 'center'}}>{error}</Text>
                </View>
                <View style={{justifyContent:'space-evenly', flex: 3}}>
                    <Text style={styles.logintextbody}>Already registered?</Text>
                    <Link href={'/login'}>
                        <Pressable style={styles.loginbutton}>
                            <Text style={styles.logintextbutton}>Login</Text>
                        </Pressable>
                    </Link>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}

export default RegisterScreen;

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