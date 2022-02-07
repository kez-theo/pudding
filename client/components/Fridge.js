/* eslint-disable no-unused-vars */
import { StatusBar } from "expo-status-bar";
import Scanner from "./Scanner";
import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getFridgeThunk } from "../store/fridge";

export default function Fridge({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();
  const fridgeSelector = useSelector((state) => state.fridgeReducer);

  const viewFridge = (userId) => {
    dispatch(getFridgeThunk(userId));
  };

  useEffect((userId) => {
    viewFridge(1);
  }, []);

  const FridgeFlatList = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Image
        style={styles.tinyThyme}
        source={{
          uri:
            "https://us.123rf.com/450wm/eridanka/eridanka2103/eridanka210300026/165315737-a-sprig-of-rosemary-hand-drawn-sketch-style-illustration-design-element.jpg?ver=6",
        }}
      />
      <Text style={[styles.title, textColor]}>{item.foodItem_name}</Text>
      <Text style={styles.itemText2}> {item.fridge.quantity} </Text>
    </TouchableOpacity>
  );

  const renderFridgeFlatList = ({ item }) => {
    const color =
      item.id === selectedId ? "rgb(42, 82, 69)" : "rgb(65, 140, 115)";

    return (
      <FridgeFlatList
        item={item}
        onPress={() => setSelectedId(item.id)}
        textColor={{ color }}
      />
    );
  };
  let DATA = fridgeSelector.foodItems;
  return (
    <SafeAreaView style={styles.container}>
      {!fridgeSelector.foodItems ? (
        <Text> Loading... </Text>
      ) : (
        <SafeAreaView>
          <FlatList
            data={DATA}
            renderItem={renderFridgeFlatList}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
          <Button
            title="Go to Scanner"
            onPress={() => navigation.navigate("Scanner")}
          />
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "rgb(65, 140, 115)",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Avenir",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  item: {
    shadowColor: "rgb(44, 89, 74)",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: "white",
    padding: 16,
    width: "100%",
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

  title: {
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
