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


//THUNK

export const saveRecipeThunk = (recipeObj) => {
  let userId = 1;
  let recipeName = recipeObj.title
  let recipeId = recipeObj.id
  console.log("recipe from thunk", recipeName, recipeId)
  return async (dispatch) => {
    try {
      const { data: recipe } = await axios.post(
        //`https://orange-bulldog-61.loca.lt/api/recipes/${userId}`,
        `https://the-thymely-cook.herokuapp.com/api/recipes/${userId}`,
        {
          recipeName, recipeId
        }
      );
      dispatch(saveRecipe(recipeObj));
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

export default function recipeReducer(state = [], action) {
    console.log("I'm recipeReducer, I got ", action.recipe)
  switch (action.type) {
    case SAVE_RECIPE:
      return {saved: [...state, action.recipe]}
    default:
      return state;
  }
}