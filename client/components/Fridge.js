/* eslint-disable no-unused-vars */
import { StatusBar } from "expo-status-bar";
import Scanner from "./Scanner";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Alert, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getFridgeThunk } from "../store/fridge";

export default function Fridge({ navigation }) {
  const dispatch = useDispatch();
  const fridgeSelector = useSelector((state) => state.fridgeReducer);

  const viewFridge = (userId) => {
    dispatch(getFridgeThunk(userId));
  };

  useEffect((userId) => {
    viewFridge(1);
  }, []);

  return (
    <View style={styles.container}>
      {!fridgeSelector.foodItems ? (
        <Text> Fridge is Loading </Text>
      ) : (
        fridgeSelector.foodItems.map((item, index) => (
          <View style={styles.item}>
            <View>
              <Image
                style={styles.tinyThyme}
                source={{
                  uri:
                    "https://us.123rf.com/450wm/eridanka/eridanka2103/eridanka210300026/165315737-a-sprig-of-rosemary-hand-drawn-sketch-style-illustration-design-element.jpg?ver=6",
                }}
              />
            </View>
            <Text style={styles.itemText}>
              {item.foodItem_name}: {"    "}
            </Text>
            <Text style={styles.itemText2}>
              {" "}
              Amount in Fridge = {item.fridge.quantity}{" "}
            </Text>
          </View>
        ))
      )}
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
    backgroundColor: "rgb(242, 250, 247)",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: "white",
    padding: 16,
    width: "90%",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  tinyThyme: {
    width: 20,
    height: 20,
  },

  itemText: {
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Avenir",
  },
  itemText2: {
    fontSize: 16,
    color: "green",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Avenir",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
