/* eslint-disable no-unused-vars */
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import {
  deleteFoodItemFromFridgeThunk,
  getFridgeItemThunk,
} from "../store/fridge";

export default function SingleFoodItem({ route, navigation }) {
  const dispatch = useDispatch();
  const fridgeSelector = useSelector((state) => state.fridgeReducer);
  const foodItemSelector = useSelector((state) => state.foodItemReducer);
  let DATA = fridgeSelector;
  let id = route.params.foodItemId;
  let user = route.params.userId;

  //hook usedispatch function
  const viewFoodItem = (userId, foodItemId) => {
    dispatch(getFridgeItemThunk(userId, foodItemId));
  };

  const deleteFromFridge = (userId, foodItemId) => {
    dispatch(deleteFoodItemFromFridgeThunk(userId, foodItemId));
  };

  //immediate page render
  useEffect((id) => {
    viewFoodItem(user, id);
  }, []);

  const onPressRecipe = () => navigation.navigate("Recipes", { name });

  return (
    <SafeAreaView style={styles.container}>
      {!DATA ? (
        <Text> Loading... </Text>
      ) : (
        <SafeAreaView style={styles.item}>
          <Text style={styles.heading}>{name}</Text>
          <View>
            <Text style={styles.itemText2}>Quantity</Text>
          </View>
          <View>
            <Image
              style={styles.tinyThyme}
              source={{
                uri:
                  "https://us.123rf.com/450wm/eridanka/eridanka2103/eridanka210300026/165315737-a-sprig-of-rosemary-hand-drawn-sketch-style-illustration-design-element.jpg?ver=6",
              }}
            />
          </View>
          <Text style={styles.heading}></Text>
        </SafeAreaView>
      )}
      <TouchableOpacity style={styles.logout} onPress={onPressRecipe}>
        <Text style={{ color: "rgb(65, 140, 115)" }}>Recipe Suggestions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logout}
        onPress={navigation.navigate("Edit", { user, id })}
      >
        <Text style={{ color: "rgb(65, 140, 115)" }}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logout} onPress={deleteFromFridge(1, id)}>
        <Text style={{ color: "rgb(65, 140, 115)" }}>Delete From Fridge</Text>
      </TouchableOpacity>
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
  logout: {
    shadowColor: "rgb(44, 89, 74)",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: "white",
    padding: 16,
    color: "red",
    borderRadius: 30,
    flexDirection: "row",
    margin: 20,
  },
  itemText2: {
    fontSize: 16,
    color: "rgb(65, 140, 115)",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Avenir",
  },
  hint: {
    paddingTop: 50,
    fontSize: 16,
    color: "rgb(255, 36, 131)",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Noteworthy",
  },
  heading: {
    color: "rgb(65, 140, 115)",
    paddingTop: 30,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Avenir",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    shadowColor: "rgb(44, 89, 74)",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: "white",
    width: "75%",
    height: "50%",
    borderRadius: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },
  tinyThyme: {
    width: 100,
    height: 100,
  },
});
