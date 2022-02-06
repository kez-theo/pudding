import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import recipesReducer from "./recipes";
import foodItemsReducer from "./foodItems";
import fridgeReducer from "./fridge";

//add reducers here! Don't forget to import!

const reducer = combineReducers({
  recipesReducer,
  foodItemsReducer,
  fridgeReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
