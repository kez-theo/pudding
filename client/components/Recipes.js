import React, { useEffect } from 'react';
import { Button, StyleSheet, Image, FlatList, Text, View } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { getRecipesByFoodItem } from "../store/recipes";
 


// const Recipes = () => {
//   //gives access to dispatch thunks directly
//   const dispatch = useDispatch();
//   //gives access to redux state
//   const recipes = useSelector((state) => {
//     return {
//       recipes: state.recipesReducer,
//     }
//   });  

//   //where you preform side effects, including data fetching, manually changing the DOM, using history (also available as a hook). Basically componentDidMount, componentDidUpdate and componentWillUnmount combined.
//   useEffect(() => {
//     dispatch(getRecipesByFoodItem());
//     //this empty bracket determines that whatever is in the useEffect body will be called once, making this a replacement for componentDidMount.
//   }, []);

//   const results = recipes.results
//   console.log(results)
//   return (
//     <View style={styles.container}>
//       {results.map((result) => {
//         return (
//           <View key={result.id}>
//             <Text>{result.title}</Text>
//             <Image style={styles.thumbnail} source={ {uri: result.image} } />
//           </View>
//         )
//       })}
//     </View>
//   );
// };

// export default Recipes;

// const styles = StyleSheet.create({
//   list: {
//     flex: 1,
//     backgroundColor: '#eee',
//     width: '90%',
//     paddingTop: 50,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#fe0055",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });


const recipes = {
  "results": [
      {
          "id": 639203,
          "title": "Chocolate Soup",
          "image": "https://spoonacular.com/recipeImages/639203-312x231.jpg",
          "imageType": "jpg"
      },
      {
          "id": 639167,
          "title": "Chocolate Plums",
          "image": "https://spoonacular.com/recipeImages/639167-312x231.jpg",
          "imageType": "jpg"
      },
      {
          "id": 639234,
          "title": "Chocolate Wafers",
          "image": "https://spoonacular.com/recipeImages/639234-312x231.jpg",
          "imageType": "jpg"
      },
      {
          "id": 639168,
          "title": "Chocolate Popcorn",
          "image": "https://spoonacular.com/recipeImages/639168-312x231.jpg",
          "imageType": "jpg"
      },
      {
          "id": 67308,
          "title": "Chocolate Souffle",
          "image": "https://spoonacular.com/recipeImages/67308-312x231.jpg",
          "imageType": "jpg"
      }
  ],
  "offset": 0,
  "number": 5,
  "totalResults": 539
}

export default function Recipes() {
  const results = recipes.results
  console.log(process.env)
  return (
    <View style={styles.container}>
      {results.map((result) => {
        return (
          <View key={result.id}>
            <Text>{result.title}</Text>
            <Image style={styles.thumbnail} source={ {uri: result.image} } />
          </View>
        )
      })}
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
  list: {
    flex: 1,
    backgroundColor: '#e3ffee',
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  thumbnail: {
    width: 150,
    height: 150,
  },
});


