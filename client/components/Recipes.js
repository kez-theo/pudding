import { Button, StyleSheet, Image, Text, View } from "react-native";

export default function Recipes({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Recipes Coming Soon!</Text>
      <Image
        style={styles.tinyThyme}
        source={{
          uri:
            "https://us.123rf.com/450wm/eridanka/eridanka2103/eridanka210300026/165315737-a-sprig-of-rosemary-hand-drawn-sketch-style-illustration-design-element.jpg?ver=6",
        }}
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
  tinyThyme: {
    width: 150,
    height: 150,
  },
});
