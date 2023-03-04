
import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDoc } from "../../Utils/Firebase/Firebase";
import {  fetchCategoriesStart, fetchCategoriesSucess, fetchCategoriesFailed } from "./CategoryAction";
import { CATEGORIES_ACTION_TYPES } from "./CategoryTypes";





export function* fetchCategoriesAsyncSaga() {
    try {
        const categoriesArray = yield call(getCategoriesAndDoc, 'categories');
        yield put(fetchCategoriesSucess(categoriesArray))
    } catch (error) {
        yield put(fetchCategoriesFailed(error))
    } 
}

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsyncSaga)
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
}