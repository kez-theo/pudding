import React, { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, TouchableOpacity, Image, FlatList, SafeAreaView, Text, View } from 'react-native';
const spnAPI = 'https://api.spoonacular.com/recipes/';
import {SPOON_API_KEY} from '@env'
const axios = require("axios");

import { useSelector, useDispatch } from "react-redux";
import { getRecipeById, saveRecipeThunk } from "../store/singleRecipe";
//this screen should get resipeId and name as props
export default function SingleRecipe({route}) {
    const [recipe, setRecipe] = useState( null );
    const id = route.params.id
    const name = route.params.title
    //const dispatch = useDispatch();

    // const { recipeSteps } = useSelector((state) => {
    //     return {
    //         recipeSteps: state.recipeReducer.recipe.steps,
    //     }
    // });  
    //my old
    // useEffect(() => {
    //    dispatch(getRecipeById(route.params.id));
    // }, []);


    useEffect(() => {
        const fetchRecipe = async () => {
            const { data: recipe } = await axios.get(`${spnAPI}${id}/information?includeNutrition=false&apiKey=${SPOON_API_KEY}`);
            console.log("this is my steps", recipe.analyzedInstructions[0])
          setRecipe(recipe)
        };
        fetchRecipe(); 
      }, []);

//     const handlePress = (recipe) => {
        
//     dispatch(saveRecipeThunk(saveRecipeThunk(recipe)));
//   };

    if (recipe) {
        return (
        

        <View style={styles.container}>
            <Text style={styles.text}></Text> 
            <Text style={styles.text}>{name} preparation</Text> 
            <Text style={styles.text}>{ recipe.readyInMinutes } Minutes </Text>
            {
                recipe.extendedIngredients.map((ingredient) => (<Text style={styles.text2}>{ ingredient.name }</Text>))

               // recipe.analyzedInstructions[0].steps ? (recipe.analyzedInstructions[0].steps.map((item, index) => ( <Text key={index} style={styles.text2}>{item.number}. {item.step}</Text>  ))) : (<Text>Loading...</Text>)
               
            }  
            <Text style={styles.text}>Enjoy!</Text> 
            <Image
                style={styles.tinyThyme}
                source={{
                uri:
                    "https://us.123rf.com/450wm/eridanka/eridanka2103/eridanka210300026/165315737-a-sprig-of-rosemary-hand-drawn-sketch-style-illustration-design-element.jpg?ver=6",
                }}
            />
            <Button
                style={styles.button}
                title="Save to favorites"
                //onPress={handlePress}
            />
        </View> 
    ) } else {
        return (
          <View>
            <Text>Loading...</Text>
          </View>
        )
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
  text:{
    fontSize: 20, 
    fontWeight: 'bold',
    justifyContent: 'center', 
    alignItems: 'center',
    color: 'teal',
    fontFamily: 'Avenir',
    paddingTop: 20,
  },
  text2:{
    fontSize: 14, 
    color: 'green',
    //fontWeight: 'bold',
    justifyContent: 'center', 
    alignItems: 'center',
    fontFamily: 'Avenir',
    padding: 5, 
  },
  tinyThyme: {
    width: 60,
    height: 60,
  },
});

const dummyRecipesOptions = {
    "results": [
        {
            "id": 663588,
            "title": "Tomato Cutlets",
            "image": "https://spoonacular.com/recipeImages/663588-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 663641,
            "title": "Tomato tarte tatin",
            "image": "https://spoonacular.com/recipeImages/663641-312x231.jpg",
            "imageType": "jpg"
        }
    ],
    "offset": 0,
    "number": 2,
    "totalResults": 804
};
