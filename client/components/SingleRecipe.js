import React, { useEffect } from 'react';
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Image, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getRecipeById } from "../store/singleRecipe";

export default function SingleRecipe({navigation}) {
    
   

   
    //let stepsArray = recipe[0].steps;
    return (
     
     <View style={styles.container}>
     <Text style={styles.text}>{dummyRecipesOptions.results[1].title} Preparation</Text> 
     {/* {
      stepsArray.map((item, index) => (
        <Text key={index} style={styles.text2}>{item.number} {item.step}</Text> 
      )
      )}   */}
     <Text style={styles.text}>Enjoy!</Text> 
     <Image
        style={styles.tinyThyme}
        source={{
          uri:
            "https://us.123rf.com/450wm/eridanka/eridanka2103/eridanka210300026/165315737-a-sprig-of-rosemary-hand-drawn-sketch-style-illustration-design-element.jpg?ver=6",
        }}
      />
     

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
    fontSize: 24, 
    fontWeight: 'bold',
    justifyContent: 'center', 
    alignItems: 'center',
    color: 'teal',
    fontFamily: 'Avenir', 
  },
  text2:{
    fontSize: 16, 
    color: 'green',
    //fontWeight: 'bold',
    justifyContent: 'center', 
    alignItems: 'center',
    fontFamily: 'Avenir', 
  },
  tinyThyme: {
    width: 100,
    height: 100,
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
const dummyRecipe = [
    {
        "name": "",
        "steps": [
            {
                "number": 1,
                "step": "Prepare the eggs, bread crumbs and sliced tomatoes.Dip the tomato slice in the egg wash and then in the bread crumbs.  If you have extra egg wash and bread crumbs you can repeat this process.",
                "ingredients": [
                    {
                        "id": 18079,
                        "name": "breadcrumbs",
                        "localizedName": "breadcrumbs",
                        "image": "breadcrumbs.jpg"
                    },
                    {
                        "id": 11529,
                        "name": "tomato",
                        "localizedName": "tomato",
                        "image": "tomato.png"
                    },
                    {
                        "id": 1123,
                        "name": "egg",
                        "localizedName": "egg",
                        "image": "egg.png"
                    },
                    {
                        "id": 0,
                        "name": "dip",
                        "localizedName": "dip",
                        "image": ""
                    }
                ],
                "equipment": []
            },
            {
                "number": 2,
                "step": "Heat a large frying pan with the olive oil and place the prepared tomato slices in the pan.  When the tomatoes have a nice golden color gently flip and finish cooking on the other side.  This will take about 3-4 minutes on each side on medium heat.",
                "ingredients": [
                    {
                        "id": 10511529,
                        "name": "tomato slices",
                        "localizedName": "tomato slices",
                        "image": "sliced-tomato.jpg"
                    },
                    {
                        "id": 4053,
                        "name": "olive oil",
                        "localizedName": "olive oil",
                        "image": "olive-oil.jpg"
                    },
                    {
                        "id": 11529,
                        "name": "tomato",
                        "localizedName": "tomato",
                        "image": "tomato.png"
                    }
                ],
                "equipment": [
                    {
                        "id": 404645,
                        "name": "frying pan",
                        "localizedName": "frying pan",
                        "image": "pan.png"
                    }
                ],
                "length": {
                    "number": 4,
                    "unit": "minutes"
                }
            },
            {
                "number": 3,
                "step": "Place halved eggplant in the frying pan and sprinkle with dashes of salt and pepper.",
                "ingredients": [
                    {
                        "id": 1102047,
                        "name": "salt and pepper",
                        "localizedName": "salt and pepper",
                        "image": "salt-and-pepper.jpg"
                    },
                    {
                        "id": 11209,
                        "name": "eggplant",
                        "localizedName": "eggplant",
                        "image": "eggplant.png"
                    }
                ],
                "equipment": [
                    {
                        "id": 404645,
                        "name": "frying pan",
                        "localizedName": "frying pan",
                        "image": "pan.png"
                    }
                ]
            },
            {
                "number": 4,
                "step": "Let the eggplant saut on one side to a golden color then turn and saut on the other side.  This will take about 3  4 minutes on each side.Plate and finish with the parsley garnish, lemon juice and grated cheese.",
                "ingredients": [
                    {
                        "id": 9152,
                        "name": "lemon juice",
                        "localizedName": "lemon juice",
                        "image": "lemon-juice.jpg"
                    },
                    {
                        "id": 11209,
                        "name": "eggplant",
                        "localizedName": "eggplant",
                        "image": "eggplant.png"
                    },
                    {
                        "id": 11297,
                        "name": "parsley",
                        "localizedName": "parsley",
                        "image": "parsley.jpg"
                    },
                    {
                        "id": 1041009,
                        "name": "cheese",
                        "localizedName": "cheese",
                        "image": "cheddar-cheese.png"
                    }
                ],
                "equipment": [],
                "length": {
                    "number": 4,
                    "unit": "minutes"
                }
            }
        ]
    }
]