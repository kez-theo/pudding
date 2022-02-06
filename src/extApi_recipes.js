const axios = require("axios");
import {SPOON_API_KEY} from '@env'

const spnAPI = 'https://api.spoonacular.com/recipes/'




export const getRecipesFromFridge = async () => {
  try {
    const res = await axios.get(`${spnAPI}complexSearch?query=tomato&number=2&apiKey=${SPOON_API_KEY}`, recipes)
    const recipes = res.data.results
  } catch (err) {
    console.log(err)
  }
}
