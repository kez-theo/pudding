//if route.params.userId, then show quantity?
import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useDispatch } from 'react-redux';


export default function EditFood({ navigation }) {
  let dispatch = useDispatch()
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState()//uh passthrough?//);

    const viewFoodItem = (userId, foodItemId) => {
      dispatch(getFridgeItemThunk(userId, foodItemId));
    };

   const deleteFromFridge = (userId, foodItemId) => {
      dispatch(deleteFoodItemFromFridgeThunk(userId, foodItemId));
    };
    useEffect(() => {
      viewFoodItem()
    }, [])
  return (
      <SafeAreaView style={styles.container}>
         <Text style={styles.text}>Edit</Text>
        {!DATA ? (
          <Text> Loading... </Text>
        ) : (
          <SafeAreaView style={styles.item}>
            <Text style={styles.heading}>{name}</Text>
            <TextInput
            style={styles.emailInput}
            placeholder={name}
            value={name}
            onChangeText={(name) => setName(name)}
            autoCapitalize="none"
          />
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


          <TextInput
            style={styles.passwordInput}
            placeholder="How Much Do You Have?"
            value={quantity}
            onChangeText={(quantity) => setQuantity(quantity)}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <View style={styles.footerView}>
            <Text style={styles.footerText}>
              Don't have an account? {' '}
               <Text onPress={onFooterLinkPress} style={styles.footerLink}>
                 Sign up
               </Text>
            </Text>
          </View>
      </View>
  );
};
