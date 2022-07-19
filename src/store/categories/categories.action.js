import {CATEGORIES_ACTION_TYPES} from './categories.types';
import { createAction } from '../../utils/reducer/reducer.utils';




export const fetchCategoriesStart = () =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArry) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArry);

export const fetchCategoriesFaild = (error) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

