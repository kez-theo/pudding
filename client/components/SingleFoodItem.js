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

export default function SingleFoodItem({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Coming Soon!</Text>
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
