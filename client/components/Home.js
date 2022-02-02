/* eslint-disable no-unused-vars */
import { StatusBar } from "expo-status-bar";
import NavigationBar from "./NavigationBar";
import { Button, StyleSheet, Image, Text, View } from "react-native";

//navigation prop passed down documentation: https://reactnavigation.org/docs/navigation-prop
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.tinyThyme}
        source={{
          uri:
            "https://us.123rf.com/450wm/eridanka/eridanka2103/eridanka210300026/165315737-a-sprig-of-rosemary-hand-drawn-sketch-style-illustration-design-element.jpg?ver=6",
        }}
      />
      <Text>Dummy Navigation Buttons</Text>
      <Button
        title="Go to Fridge"
        onPress={() => navigation.navigate("Fridge")}
      />
      <Button
        title="Go to Recipes"
        onPress={() => navigation.navigate("Recipes")}
      />
      {/* // <NavigationBar /> */}
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
  tinyThyme: {
    width: 150,
    height: 150,
  },
});
