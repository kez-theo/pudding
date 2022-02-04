/* eslint-disable no-unused-vars */
import * as React from "react";
<<<<<<< HEAD
=======
import {Provider} from 'react-redux'
import store from './client/store'
>>>>>>> main
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Home from "./client/components/Home";
import Fridge from "./client/components/Fridge";
import Scanner from "./client/components/Scanner";
<<<<<<< HEAD
import LoginScreen from "./client/components/UserLogin";

const Stack = createNativeStackNavigator();
=======
import Recipes from "./client/components/Recipes";
>>>>>>> main

const Stack = createNativeStackNavigator();

const App = () => {
  return (
<<<<<<< HEAD
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
=======
    <Provider store={store}>
      <AppSource />
    </Provider>
  )
}

const AppSource = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
>>>>>>> main
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Thymely Cook",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen name="Fridge" component={Fridge} />
        <Stack.Screen name="Scanner" component={Scanner} />
<<<<<<< HEAD
=======
        <Stack.Screen name="Recipes" component={Recipes} />
>>>>>>> main
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;