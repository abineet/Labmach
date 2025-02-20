import React from 'react';
import { Pressable, ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import { Link } from 'expo-router';

const Dashboard = () => {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('@/assets/images/register.png')} style={styles.loginbackground}>
                <View style={{flexDirection:'row-reverse', height: '10%'}}>
                    <Link href='/' asChild>
                        <Pressable style={styles.loginbutton}>
                            <Text style={styles.logintextbutton}>Logout</Text>
                        </Pressable>
                    </Link>
                </View>
                <View style={{justifyContent: 'center',height: '20%'}}>
                     <Text style={styles.logintextheading}>Hi!</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-evenly', height: '20%'}}>
                    <Link href='/' asChild>
                        <Pressable style={{justifyContent:'center'}}>
                            <Image source={require('@/assets/images/study.png')} style={{height:105,width:120}}/>
                            <Text style={styles.logintextbody}>Study</Text>
                        </Pressable>
                    </Link>
                    <Link href='/' asChild>
                        <Pressable style={{justifyContent:'center'}}>
                            <Image source={require('@/assets/images/submit_req.png')} style={{height:105,width:120}}/>
                            <Text style={styles.logintextbody}>Request</Text>
                        </Pressable>
                    </Link>
                    <Link href='/' asChild>
                        <Pressable style={{justifyContent:'center'}}>
                            <Image source={require('@/assets/images/user.png')} style={{height:105,width:120}}/>
                            <Text style={styles.logintextbody}>User</Text>
                        </Pressable>
                    </Link>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-evenly', height: '20%'}}>
                    <Link href='/' asChild>
                        <Pressable style={{justifyContent:'center'}}>
                            <Image source={require('@/assets/images/upload.png')} style={{height:105,width:120}}/>
                            <Text style={styles.logintextbody}>Upload</Text>
                        </Pressable>
                    </Link>
                    <Link href='/' asChild>
                        <Pressable style={{justifyContent:'center'}}>
                            <Image source={require('@/assets/images/contribute.png')} style={{height:105,width:120}}/>
                            <Text style={styles.logintextbody}>Contribute</Text>
                        </Pressable>
                    </Link>
                    <Link href='/' asChild>
                        <Pressable style={{justifyContent:'center'}}>
                            <Image source={require('@/assets/images/about_us.png')} style={{height:105,width:120}}/>
                            <Text style={styles.logintextbody}>About us</Text>
                        </Pressable>
                    </Link>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Dashboard;

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