import { CATEGORIES_ACTION_TYPES } from "./CategoryTypes";
import { createAction } from '../../Utils/Reducer/Reducer';


export const setCategories = (categoriesArray) => 
    createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray)