import axios from "axios";
export const GET_FOOD_ITEM = "GET_FOOD_ITEM";
export const GET_FOOD_ITEMS = "GET_FOOD_ITEMs";
export const ADD_FOOD_ITEM = "ADD_FOOD_ITEM";

export const _getFoodItem = (foodItem) => {
  return {
    type: ADD_FOOD_ITEM,
    foodItem,
  };
};

export const _getFoodItems = (foodItems) => {
  return {
    type: ADD_FOOD_ITEM,
    foodItems,
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

export const addFoodItemThunk = (foodItem_name) => {
  return async (dispatch) => {
    try {
      const { data: food } = await axios.post(
        "https://fast-grasshopper-49.loca.lt/api/foodItems/",
        {
          foodItem_name,
        }
      );
      dispatch(_addFoodItem(food));
    } catch (err) {
      console.log(err);
    }
  };
};

let initialState = [];

export default function foodItemsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FOOD_ITEMS:
      return action.foodItems;
    case GET_FOOD_ITEM:
      return action.foodItem;
    case ADD_FOOD_ITEM:
      return [...state, action.foodItem];
    default:
      return state;
  }
}
