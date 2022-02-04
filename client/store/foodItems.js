import axios from "axios";

export const GET_FOOD_ITEM = "GET_FOOD_ITEM";
export const ADD_FOOD_ITEM = "ADD_FOOD_ITEM";

export const _getFoodItem = (foodItem) => {
  return {
    type: ADD_FOOD_ITEM,
    foodItem,
  };
};

export const _addFoodItem = (foodItem) => {
  return {
    type: ADD_FOOD_ITEM,
    foodItem,
  };
};

//thunks
export const getFoodItemThunk = (foodItemId) => {
  return async (dispatch) => {
    try {
      const { data: foodItem } = await axios.get(
        `/api/foodItems/${foodItemId}`
      );
      dispatch(_getFoodItem(foodItem));
    } catch (error) {
      console.log("GET FOOD ITEM THUNK ERROR");
    }
  };
};

export const addFoodItemThunk = (newFoodItem) => {
  console.log("we here?");
  return async (dispatch) => {
    try {
      const { data: foodItem } = await axios.post(
        "/api/foodItems",
        newFoodItem
      );
      console.log("we here 2?");
      dispatch(_addFoodItem(foodItem));
    } catch (err) {
      console.log("ADD FOOD ITEM ERROR");
    }
  };
};

let initialState = [];

export default function foodItemsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FOOD_ITEM:
      return action.foodItem;
    case ADD_FOOD_ITEM:
      return [...state, action.foodItem];
    default:
      return state;
  }
}
