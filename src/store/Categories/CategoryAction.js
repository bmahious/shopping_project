import { CATEGORIES_ACTION_TYPES } from "./CategoryTypes";
import { createAction } from '../../Utils/Reducer/Reducer';
//import { getCategoriesAndDoc } from '../../Utils/Firebase/Firebase'



export const fetchCategoriesStart = () => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSucess = (categoriesArray) => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

// export const fetchCategoriesAsync = () => async (dispatch) => {
//     dispatch(fetchCategoriesStart())
//     try {
//         const categoriesArray = await getCategoriesAndDoc();
//         dispatch(fetchCategoriesSucess(categoriesArray));
//     } catch (error) {
//         dispatch(fetchCategoriesFailed(error))
//     }
// }