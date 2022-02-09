/* eslint-disable no-unused-vars */
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  View,
} from "react-native";

export default function BETA({ navigation }) {
  return (
    <SafeAreaView>
      <Text style={styles.hint}>
        Hello Beta Testers!! Here, will be a voice assistant for foodcooking.
        What features would you find useful to help you with cooking? click the
        phrases for your top 2!
      </Text>

      <Button
        title="Voice help that tells you the next step in the recipe, so you don't need to look at your phone/find it"
        onPress={() => console.log("A")}
      />
      <Button
        title="Helping you update the food you have in your fridge by adding an item that you bought"
        onPress={() => console.log("B")}
      />
      <Button
        title="Suggesting recipes based on food in your fridge"
        onPress={() => console.log("C")}
      />
      <Button
        title="Suggesting recipes based on food that will expire soon in your fridge"
        onPress={() => console.log("D")}
      />
      <Button
        title="Something else, ill drop you a line in the chat "
        onPress={() => console.log("E")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  hint: {
    paddingTop: 50,
    fontSize: 20,
    color: "rgb(255, 36, 131)",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Noteworthy",
    padding: 30,
  },
  Button: {
    padding: 20,
  },
});
