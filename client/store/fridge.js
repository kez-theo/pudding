/* eslint-disable no-unused-vars */
import axios from "axios";
export const GET_FRIDGE = "GET_FRIDGE";
export const ADD_TO_FRIDGE = "ADD_TO_FRIDGE";

export const _getFridge = (fridge) => {
  return {
    type: GET_FRIDGE,
    fridge,
  };
};

export const _addToFridge = (foodItem) => {
  return {
    type: ADD_TO_FRIDGE,
    foodItem,
  };
};

//thunks
export const getFridgeThunk = (Id) => {
  let userId = 1;
  return async (dispatch) => {
    try {
      const { data: fridge } = await axios.get(`/api/fridge/${userId}`);
      dispatch(_getFridge(fridge));
    } catch (error) {
      console.log("GET FRIDGE THUNK ERROR");
    }
  };
};

export const addToFridge = (newFoodItem) => {
  let userId = 1;
  return async (dispatch) => {
    try {
      const { data: foodItem } = await axios.post(
        `/api/fridge/${userId}`,
        newFoodItem
      );
      dispatch(_addToFridge(foodItem));
    } catch (err) {
      console.log("ADD TO FRIDGE ITEM ERROR");
    }
  };
};

let initialState = [];

export default function foodItemsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FRIDGE:
      return action.fridge;
    case ADD_TO_FRIDGE:
      return [...state, action.foodItem];
    default:
      return state;
  }
}
