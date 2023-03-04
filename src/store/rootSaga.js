import { all, call } from 'redux-saga/effects';
import { categoriesSaga } from './Categories/categorySaga';

export function* rootSaga() {
    yield all([call(categoriesSaga)])
} 