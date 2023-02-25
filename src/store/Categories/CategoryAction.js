import { CATEGORIES_ACTION_MAP } from "./CategoryTypes";
import { createAction } from '../../Utils/Reducer/Reducer';


export const setCategoriesMap = (categoriesMap) => 
    createAction(CATEGORIES_ACTION_MAP.SET_CATEGORIES_MAP, categoriesMap)