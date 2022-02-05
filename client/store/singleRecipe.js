import axios from 'axios'
const spnAPI = 'https://api.spoonacular.com/recipes/'
import {SPOON_API_KEY} from "../.keys.js"

//ACTIONS
const GET_RECIPE = 'GET_RECIPE'

//ACTION CREATORS
export const getSingleRecipe = (recipe) => ({
  type: GET_RECIPE,
  recipe,
});


//THUNK

//get recipe by  recipe id
export const getRecipeById = (recipeId) => {
   // console.log(`recipeId from getRecipeById thunk ${recipeId}`)
  return async (dispatch) => {
    try {
        const { data: recipe } = await axios.get(`${spnAPI}${recipeId}/analyzedInstructions?&apiKey=${SPOON_API_KEY}`);
       console.log(`The URL thunk was trying is ${spnAPI}${recipeId}/analyzedInstructions?&apiKey=${SPOON_API_KEY}`)
        dispatch(getSingleRecipe(recipe));
        
    } catch (error) {
      dispatch(setSingleMoleFetchStatus(FETCH_FAILED));
      console.log("getSingleRecipe THUNK ERROR:  ", error);
    }
  };
};


//REDUCER

export default function recipeReducer(state = {}, action) {
    console.log("I'm recipeReducer, I got ", action.recipe)
  switch (action.type) {
    case GET_RECIPE:
    //because the url returns an array [{}]
    console.log()
      return action.recipe[0];
    default:
      return state;
  }
}