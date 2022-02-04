import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

const Button = (props) => {
  return (
    <Pressable
    // onPress={props.onPressFunction}
    // hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
    // style={({ pressed }) => [
    //   { backgroundColor: pressed ? "white" : "tomato" },
    //   styles.button,
    // ]}
    >
      <Text style={styles.text}></Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontsize: 20,
    margin: 10,
    texAlign: "center",
  },
  button: {
    width: 150,
    height: 50,
  },
});

export default Button;
