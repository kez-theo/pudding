/* eslint-disable no-unused-vars */
import * as React from "react";
import store from "./client/store";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Home from "./client/components/Home";
import Fridge from "./client/components/Fridge";
import Scanner from "./client/components/Scanner";
import Recipes from "./client/components/Recipes";
import SingleRecipe from "./client/components/SingleRecipe";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <AppSource />
    </Provider>
  );
};

const AppSource = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
        <Stack.Screen name="Recipes" component={Recipes} />
        <Stack.Screen name="SingleRecipe" component={SingleRecipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
