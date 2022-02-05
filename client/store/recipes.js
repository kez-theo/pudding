import axios from 'axios'

const spnAPI = 'https://api.spoonacular.com/recipes/'

const apiKey = process.env.SPOON_API_KEY

//Action
const GET_RECIPES = 'GET_RECIPES'


//Action Creators
export const getRecipes = (recipes) => ({
  type: GET_RECIPES,
  recipes,
});


//Thunks

//get recipes by what's in the fridge
export const getRecipesByFoodItem = () => {
  return async (dispatch) => {
    try {
      const { data: recipes } = await axios.get(`${spnAPI}complexSearch?query=tomato&number=2&apiKey=160ace34d8bb4c9f94baf956fd5923a7`, recipes)
      dispatch(getRecipes(recipes))
    } catch (err) {
      console.log(">>>>>>>GET RECIPES THUNK NOT WORKING!")
      console.log(err)
    }
  }
}


//reducer
const initialState = [];

export default function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return action.recipes;
    default:
      return state;
  }
}