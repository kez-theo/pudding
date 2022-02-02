import axios from 'axios'

const spnAPI = 'https://api.spoonacular.com/recipes/'

const SPOON_API_KEY = "SPOON_API_KEY";

//Action
const GET_RECIPES = 'GET_RECIPES'


//Action Creators
export const getRecipes = (recipes) => ({
  type: GET_RECIPES,
  recipes,
});


//Thunks

//get recipes by what's in the fridge
const getRecipesByFoodItem = async () => {
  return async (dispatch) => {
    try {
      const key = window.localStorage.getItem(STRIPE_API_KEY)
      if(key) {
        const { data: recipes } = await axios.get(`${spnAPI}complexSearch?query=tomato&number=2&apiKey=${key}`, recipes)
      }
      dispatch(getRecipes(recipes))
    } catch (err) {
      console.log(err)
    }
  }
}


//reducer
const initialState = [];

export default function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STOCK:
      return action.recipes;
    default:
      return state;
  }
}