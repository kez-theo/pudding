import axios from 'axios'

const spnAPI = 'https://api.spoonacular.com/recipes/'
//import {SPOON_API_KEY} from "../.keys.js"
import {SPOON_API_KEY} from '@env';


//ACTIONS
const GET_RECIPE = 'GET_RECIPE'
const SAVE_RECIPE = 'SAVE_RECIPE'

//ACTION CREATORS
export const getSingleRecipe = (recipe) => ({
  type: GET_RECIPE,
  recipe,
});
export const saveRecipe = (recipe) => ({
  type: SAVE_RECIPE,
  recipe,
});


//THUNKgit status

//get recipe by  recipe id
export const getRecipeById = (recipeId) => {
   // console.log(`recipeId from getRecipeById thunk ${recipeId}`)
  return async (dispatch) => {
    try {
        const { data: recipe } = await axios.get(`${spnAPI}${recipeId}/analyzedInstructions?&apiKey=${SPOON_API_KEY}`);
       console.log(`The URL thunk was trying is ${spnAPI}${recipeId}/analyzedInstructions?&apiKey=${SPOON_API_KEY}`)
        dispatch(getSingleRecipe(recipe));
        
    } catch (error) {
     
      console.log(`getSingleRecipe THUNK ERROR:${error} The URL thunk was trying is ${spnAPI}${recipeId}/analyzedInstructions?&apiKey=${SPOON_API_KEY}`);
    }
  };
};

export const saveRecipeThunk = (recipe) => {
  let userId = 1;
  return async (dispatch) => {
    try {
      const { data: recipe } = await axios.post(
        `/api/recipe/${userId}`,
        recipe
      );
      dispatch(saveRecipe(recipe));
    } catch (err) {
      console.log("saveRecipe THUNK ERROR");
    }
  };
};

const initialState = {
  recipe: {},
  savedRecipes: [],
};

//REDUCER

export default function recipeReducer(state = initialState, action) {
    console.log("I'm recipeReducer, I got ", action.recipe)
  switch (action.type) {
    case GET_RECIPE:
    //because the url returns an array [{}]
      //return action.recipe[0];
      return {...state, recipe: action.recipe[0]}
    case SAVE_RECIPE:
    //because the url returns an array [{}]
      return {...state, savedRecipes: [... action.recipe]}     
    default:
      return state;
  }
}