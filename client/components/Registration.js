import React from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { auth } from '../firebaseAuth/firebase'
import { authenticateSignUp } from '../store/auth'
import { useDispatch } from "react-redux"
//import { useDispatch } from 'react-redux';
//Text - A React component for displaying text. Text supports nesting, styling, and touch handling.
//View - The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls.
//Button - A basic button component that should render nicely on any platform. Supports a minimal level of customization.
//TextInput - The most basic use case is to plop down a TextInput and subscribe to the onChangeText events to read the user input.
//TouchableOpacity - A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.

export default function Registration({ navigation }) {  
    const dispatch = useDispatch()
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("")
    const [error, setError] = React.useState("")
    
    const onFooterLinkPress = () => {
      navigation.navigate('Login')
    }

    React.useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          navigation.navigate("Home")
        }
      })
    return unsubscribe
    }, [])
  

    const handleRegistration = async () => {
        try {
          const response = await dispatch(
            authenticateSignUp({firstName, lastName, email, password})
          );
          if(password !== confirmPassword) {
            Alert.alert("Passwords don't match")
          }
          if(password.length < 6) {
            Alert.alert('the password is too weak. Please use 6 or more characters.')
          }
          if(response !== true) setError(response)
            console.log('Registered with: ', email)
          } catch(error) {
            console.log(error);
            Alert.alert("Invalid Input")
        }
    }
 
  return (
      <View style={styles.container}>
        <Image 
          style={styles.tinyTomato}
          source={{
            uri:
            "https://us.123rf.com/450wm/eridanka/eridanka2103/eridanka210300026/165315737-a-sprig-of-rosemary-hand-drawn-sketch-style-illustration-design-element.jpg?ver=6",
          }}
        />
          <TextInput
            style={styles.firstnameInput}
            placeholder="Enter your firstname*"
            value={firstName}
            onChangeText={(firstName) => setFirstName(firstName)}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.lastnameInput}
            placeholder="Enter your lastname*"
            value={lastName}
            onChangeText={(lastName) => setLastName(lastName)}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.emailInput}
            placeholder="Enter your email*"
            value={email}
            onChangeText={(email) => setEmail(email)}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter your password*"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirm Password*"
            value={confirmPassword}
            onChangeText={(password) => setConfirmPassword(password)}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={handleRegistration}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
          <View style={styles.footerView}>
            <Text style={styles.footerText}>
              Already have an account? {' '}
               <Text onPress={onFooterLinkPress} style={styles.footerLink}>
                 Log In
               </Text>
            </Text>
          </View>
      </View> 
  );
};

      const styles = StyleSheet.create({
        container: {
          flex:1,
          padding:"4%",
          backgroundColor: "white",
          alignItems: "center",
          // justifyContent: "center",
          position: 'relative',
          padding: 100
          
        },
        text: {
          textAlign: "center",
          fontSize: 18,
          margin: 10,
          fontWeight: "bold",
          color: "#40434E",
        },
        firstnameInput: {
          textAlign: "center",
          justifyContent: "center",
          width: 300,
          borderWidth: 3,
          borderRadius: 25,
          borderColor:"rgb(65, 140, 115)",
          padding: 10,
          margin: 5,
        },
        lastnameInput: {
          textAlign: "center",
          justifyContent: "center",
          width: 300,
          borderWidth: 3,
          borderRadius: 25,
          borderColor:"rgb(65, 140, 115)",
          padding: 10,
          margin: 5,
        },
        emailInput: {
          textAlign: "center",
          justifyContent: "center",
          width: 300,
          borderWidth: 3,
          borderRadius: 25,
          borderColor:"rgb(65, 140, 115)",
          padding: 10,
          margin: 5,
        },
        passwordInput: {
          textAlign: "center",
          justifyContent: "center",
          width: 300,
          borderWidth: 3,
          borderRadius: 25,
          borderColor:"rgb(65, 140, 115)",
          padding: 10,
          margin: 5,
        },
        buttonText: {
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
        },
        button: {
          width: 150,
          padding: 5,
          backgroundColor: "#8F540E",
          borderWidth: 2,
          borderColor: "#AD8557",
          borderRadius: 15,
          alignSelf: "center",
          margin: 8,
        },
        forgotButton:{
          width: 200,
          padding: 6,
          backgroundColor: "#8F540E",
          borderWidth: 2,
          borderColor: "#AD8557",
          borderRadius: 15,
          alignSelf: "center",
          margin: 5,
        },
        scrollView: {
          backgroundColor: 'white',
          marginHorizontal: 20,
        },
        tinyTomato: {
          width: 150,
          height: 150,
        },
        footerView: {
          flex: 1,
          alignItems: 'center',
          marginTop:80
        },
        footerText: {
          fontSize: 17,
          color: '#2e2e2d',
          fontFamily: 'Lato_400Regular',
          letterSpacing: 0.2,
        },
        footerLink: {
          color: '#1261B1',
          fontFamily: 'Lato_900Black',
          fontSize: 17,
          letterSpacing: 0.2,
        },
      });
