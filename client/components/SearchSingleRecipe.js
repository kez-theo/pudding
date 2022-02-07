import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Image, Text, View } from "react-native";
import {SPOON_API_KEY} from '@env'

const spnAPI = 'https://api.spoonacular.com/recipes/'

//this screen should get resipeId and name as props
export default function SearchSingleRecipe({navigation}) {
    
  // const [currentRecipe, setCurrentRecipe] = useState( null );

  // useEffect(() => {
  //   const fetchRecipes = async () => {
  //     const res = await axios.get(
  //       `${spnAPI}/${recipeId}information?includeNutrition=false&apiKey=${SPOON_API_KEY}`
  //     )
  //     setRecipes(res.data.results)
  //   };
  //   fetchRecipes();
  // }, []);

  return (

    <View style={styles.container}>
      <Text>Hello Recipe</Text>
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
    fontSize: 22, 
    fontWeight: 'bold',
    justifyContent: 'center', 
    alignItems: 'center',
    color: 'teal',
    fontFamily: 'Avenir',
    paddingTop: 20,
  },
  text2:{
    fontSize: 16, 
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







