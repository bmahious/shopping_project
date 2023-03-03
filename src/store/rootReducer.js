import { combineReducers } from "redux";
import { userReducer } from "./User/UserReducer";
import { cardReducer } from "./Card/CardReducer";

import { categoriesReducer } from "./Categories/CategoryReducer";

export const rootReducer = combineReducers({
    user : userReducer,
    categories : categoriesReducer,
    card :cardReducer
})

// export const loggerMiddleware = (store) => (next) => (action) => {
//     if (!action.type) {
//       return next(action);
//     }
  
//     console.log('type: ', action.type);
//     console.log('payload: ', action.payload);
//     console.log('currentState: ', store.getState());
  
//     next(action);
  
//     console.log('next state: ', store.getState());
//   };