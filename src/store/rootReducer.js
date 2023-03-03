import { combineReducers } from "redux";
import { userReducer } from "./User/UserReducer";
import { categoriesReducer } from "./Categories/CategoryReducer";
import { cardReducer } from "./Card/CardReducer";

export const rootReducer = combineReducers({
    user : userReducer,
    categories : categoriesReducer,
    card :cardReducer
}) 