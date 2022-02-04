import axios from 'axios'
const spnAPI = 'https://api.spoonacular.com/recipes/'
const SPOON_API_KEY = "SPOON_API_KEY";

//ACTIONS
const GET_RECIPE = 'GET_RECIPE'

//ACTION CREATORS
export const getSingleRecipe = (recipeId) => ({
  type: GET_RECIPE,
  recipeId,
});


//THUNK

//get recipe by  recipe id
export const getRecipeById = (recipeId) => {
  return async (dispatch) => {
    try {
        const { data: recipe } = await axios.get(`${spnAPI}${recipeId}/analyzedInstructions`);
        dispatch(getSingleRecipe(recipe));
    } catch (error) {
      dispatch(setSingleMoleFetchStatus(FETCH_FAILED));
      console.log("getSingleRecipe THUNK ERROR:  ", error);
    }
  };
};


//REDUCER

export default function recipesReducer(state = {}, action) {
  switch (action.type) {
    case GET_RECIPE:
      return {singleRecipe: action.singRecipe };
    default:
      return state;
  }
}