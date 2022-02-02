/* eslint-disable no-unused-vars */
import { StatusBar } from "expo-status-bar";
import Scanner from "./Scanner";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Fridge({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Fridge Screen</Text>
      <Button
        title="Go to Scanner"
        onPress={() => navigation.navigate("Scanner")}
      />
    </View>
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
