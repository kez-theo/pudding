import { statusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
//put in env file
let EdamamURL = "https://api.edamam.com/api/food-database/v2/parser";
let EdamamId = "?app_id=df75a211";
let EdamamKey = "&app_key=1bc205251ce1ff9a48d6d26579d9b2de";
let EdamamType = "&nutrition-type=logging";

export default function Scanner() {
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
    console.log("Type: " + type + "Data" + data);
    //axios.get(EdamamURL, EdamamId, EdamamKey, data, EdamamType)
    //let UPC = "UPC="+`${text}`
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for Camera Permission</Text>
      </View>
    );
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
      <View style={styles.barcode}>
        <BarCodeScanner
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
      <Text style={styles.maintext}> {text} </Text>

      {scanned && (
        <Button
          title={"Scan again?"}
          onPress={() => setScanned(false)}
          color="tomato"
        />
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
