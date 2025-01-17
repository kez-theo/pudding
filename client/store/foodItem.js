import axios from "axios";

export const GET_FOOD_ITEM = "GET_FOOD_ITEM";

export const _getFoodItem = (foodItem) => {
  return {
    type: GET_FOOD_ITEM,
    foodItem,
  };
};

export const getFoodItemThunk = (foodItemId) => {
  return async (dispatch) => {
    try {
      const { data: foodItem } = await axios.get(
        `https://the-thymely-cook.herokuapp.com/api/foodItems/${foodItemId}`
      );
      dispatch(_getFoodItem(foodItem));
    } catch (error) {
      console.error(error);
    }
  };
};

let initialState = [];

export default function foodItemReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FOOD_ITEM:
      return action.foodItem;
    default:
      return state;
  }
}
