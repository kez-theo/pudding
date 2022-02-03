/* eslint-disable no-unused-vars */

// // //put in env file
// let EdamamURL = "https://api.edamam.com/api/food-database/v2/parser";
// let EdamamId = "?app_id=df75a211";
// let EdamamKey = "&app_key=1bc205251ce1ff9a48d6d26579d9b2de";
// let EdamamType = "&nutrition-type=logging";

import React, { useState, useEffect } from "react";
<<<<<<< HEAD:client/components/barcodeScanner.js
import { Stylesheet, Text, View, SafeAreaView, Button } from "react-native";
import { barcodeScanner } from "expo-barcode-scanner";
//put in env file
=======
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
>>>>>>> main:client/components/Scanner.js

export default function Scanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("No Barcode Scanned Yet!");

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    alert(`How much of ${data} would you like to add to the fridge?`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ marign: 10 }}>
          Request Denied: How would you like to add food to your Fridge?
        </Text>
        <Button
          title={"Scan Barcode"}
          OnPress={() => askForCameraPermission()}
        />
        <Button
          title={"Add Manually"}
          OnPress={() => {
            return (
              <View style={styles.container}>
                <Text> Coming Soon! </Text>
              </View>
            );
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.maintext}>
        {" "}
        Will be the name of the food, not UPC {text}{" "}
      </Text>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.barcode}
      />
      {scanned && (
        <View>
          <BarCodeScanner style={{ height: 0 }} />
          <Button
            title={"Tap to Scan Again"}
            onPress={() => {
              setScanned(false);
              setText(false);
            }}
          />
          <Button
            title="Go to Fridge"
            onPress={() => navigation.navigate("Fridge")}
          />
        </View>
      )}
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
  barcode: {
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
});
