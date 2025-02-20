import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
    return (
        <View style = {{flex: 1}}>
        <ImageBackground source={require('@/assets/images/homepage.png')} style={{flex:1, justifyContent: 'space-evenly'}}>
            <Text style={styles.hometextintro}>
                LaBmAcH is a platform 
                which provides free access 
                to information about 
                latest research tools and 
                techniques of different 
                fields of science.
            </Text>
            <Link href="/login" asChild>
                <Pressable style={styles.homebutton}>
                    <Text style={{color: "black", fontSize: 20, textAlign: "center"}}>Let{'\''}s Start</Text>
                </Pressable>
            </Link>
        </ImageBackground>
    </View>
    );
}

const styles = StyleSheet.create({
    hometextintro: {
      color: "white",
      fontSize: 30,
      fontWeight: "bold",
      textShadowOffset: {height:1,width:1},
      textShadowRadius: 1,
      textShadowColor: "black",
      textAlign: "center"
    },
    homebutton: {
      backgroundColor: "white",
      borderRadius: 10,
      borderWidth: 1,
      height: 50,
      width: 150,
      alignSelf: 'center',
      justifyContent: 'center'
    }
});