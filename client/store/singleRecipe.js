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
    console.log(`recipeId from getRecipeById thunk ${recipeId}`)
  return async (dispatch) => {
    try {
        const { data: recipe } = await axios.get(`${spnAPI}${recipeId}/analyzedInstructions&apiKey=7de551d8a45043c7b1297b9a73eaf5c1`);
        console.log(`recipe from getRecipeById thunk ${recipe}`)
        dispatch(getSingleRecipe(recipe));
        
    } catch (error) {
      dispatch(setSingleMoleFetchStatus(FETCH_FAILED));
      console.log("getSingleRecipe THUNK ERROR:  ", error);
    }
  };
};


//REDUCER

export default function recipeReducer(state = {}, action) {
    console.log("I'm recipeReducer")
  switch (action.type) {
    case GET_RECIPE:
      return {recipe: action.recipe};
    default:
      return state;
  }
}