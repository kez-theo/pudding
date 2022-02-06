import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {View,Text, TouchableOpacity,ImageBackground,Image,TextInput, StyleSheet} from "react-native";
import { updateUserThunk, updatePassword } from "../store/auth";
//import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//import Logout from "../components/Logout";
//import { INFO } from "../navigation/constants";
import { auth } from '../firebaseAuth/firebase'

export default function Profile() {
  const [error, setError] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditPassword, setIsEditPassword] = useState(false);
  const [firstName, setFirstName] = useState(firstName);
  const [lastName, setLastName] = useState(lastName);
  const [password, setPassword] = useState("123456");
  const [email, setEmail] = useState("")
  const [passwordDuplicate, setPasswordDuplicate] = useState("123456");

  const dispatch = useDispatch();

  useEffect(() => {
    setFirstName(firstName);
  }, [firstName]);

  useEffect(() => {
    setLastName(lastName);
  }, [lastName]);

  const handleUpdateUser = async () => {
    try {
      const response = await dispatch(updateUserThunk({ firstName, lastName }));
      response && setIsEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePassword = async () => {
    try {
      const response = await updatePassword(password);
      if (response !== true) {
        setError(response);
      } else {
        setIsEditPassword(false);
        setError(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onPressInfoButton = async () => {
    try {
      props.navigation.navigate(INFO);
    } catch (error) {
      setError(error.message);
    }
  };

  const currentUser = auth.currentUser;
  const provider = currentUser.providerData[0].providerId;

  return (
    <View >
      <View showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 20 }}>
          <Text>Welcome {firstName}</Text>
        </View>
        <View>
          <View>
            {isEdit ? (
              <View style={{ margin: 20 }}>
                <TextInput
                  editable={false}
                  style={{
                    borderBottomWidth: 0,
                  }}
                >
                  Email: {email}
                </TextInput>
                <TextInput
                  editable={true}
                  onChangeText={(firstName) => setFirstName(firstName)}
                  value={firstName}
                ></TextInput>
                <TextInput
                  editable={true}
                  onChangeText={(lastName) => setLastName(lastName)}
                  value={lastName}
                ></TextInput>
                <TouchableOpacity
                  onPress={handleUpdateUser}
                  style={{marginTop: 20 }}
                >
                  <Text>Update</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{ margin: 20 }}>
                <TextInput
                  editable={false}
                  style={{
                    borderBottomWidth: 0,
                  }}
                >
                  Email: {email}
                </TextInput>
                <TextInput
                  editable={false}
                  style={{
                    borderBottomWidth: 0,
                  }}
                >
                  First Name: {firstName}
                </TextInput>
                <TextInput
                  editable={false}
                  style={{
                    borderBottomWidth: 0,
                  }}
                >
                  Last Name: {lastName}
                </TextInput>

                <TouchableOpacity
                  onPress={() => setIsEdit(true)}
                  style={{ marginTop: 20 }}
                >
                  <Text>Edit Profile</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View>
            {isEditPassword ? (
              <View style={{ margin: 20 }}>
                <TextInput
                  secureTextEntry
                  editable={true}
                  onChangeText={(password) => setPassword(password)}
                  value={password}
                ></TextInput>
                <TextInput
                  secureTextEntry
                  editable={true}
                  onChangeText={(passwordDuplicate) =>
                    setPasswordDuplicate(passwordDuplicate)
                  }
                  value={passwordDuplicate}
                ></TextInput>
                {error && (
                  <Text
                    style={{
                      color: "red",
                      marginTop: 10,
                    }}
                  >
                    {error}
                  </Text>
                )}
                {password !== passwordDuplicate ? (
                  <Text
                    style={{
                      color: "red",
                      marginTop: 10,
                    }}
                  >
                    Passwords must match!
                  </Text>
                ) : (
                  <TouchableOpacity
                    onPress={handleUpdatePassword}
                  >
                    <Text>Update Password</Text>
                  </TouchableOpacity>
                )}
              </View>
            ) : (
              provider !== "google.com" && (
                <View style={{ margin: 20 }}>
                  <TextInput
                    editable={false}
                    style={{
                      borderBottomWidth: 0,
                    }}
                  >
                    Password
                  </TextInput>
                  <TextInput
                    editable={false}
                    secureTextEntry
                    style={{
                      borderBottomColor: "none",
                    }}
                  >
                    {password}
                  </TextInput>
                  <TouchableOpacity
                    onPress={() => setIsEditPassword(true)}
                  >
                    <Text>Change Password</Text>
                  </TouchableOpacity>
                </View>
              )
            )}
          </View>
          <View
            style={{
              alignContent: "center",
              paddingLeft: 20,
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              onPress={onPressInfoButton}
            >
            </TouchableOpacity>
            {/* <Logout /> */}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      padding:"4%",
      backgroundColor: "#CCFFCC",
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
      borderColor:"#96C598",
      padding: 10,
      margin: 5,
    },
    lastnameInput: {
      textAlign: "center",
      justifyContent: "center",
      width: 300,
      borderWidth: 3,
      borderColor:"#96C598",
      padding: 10,
      margin: 5,
    },
    emailInput: {
      textAlign: "center",
      justifyContent: "center",
      width: 300,
      borderWidth: 3,
      borderColor:"#96C598",
      padding: 10,
      margin: 5,
    },
    passwordInput: {
      textAlign: "center",
      justifyContent: "center",
      width: 300,
      borderWidth: 3,
      borderColor:"#96C598",
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
      marginTop: 165,
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

