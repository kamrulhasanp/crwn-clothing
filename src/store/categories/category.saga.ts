import { takeLatest, all, call, put  } from 'typed-redux-saga';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { fetchCategoriesSuccess, fetchCategoriesFaild } from './categories.action';

import { CATEGORIES_ACTION_TYPES } from './categories.types';


export function* fetchCategoriesAsync(){
    try {
        const categoriesArry = yield* call(getCategoriesAndDocuments, 'categories');
        yield* put(fetchCategoriesSuccess(categoriesArry));

    } catch (error){
        yield* put(fetchCategoriesFaild(error as Error));
    }
}

export function* onFetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSaga(){
    yield all([call(onFetchCategories)]);
} 