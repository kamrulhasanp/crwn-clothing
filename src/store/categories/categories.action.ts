import { CATEGORIES_ACTION_TYPES, Category} from './categories.types';

import { 
    createAction, 
    Action, 
    withMatcher,
    ActionWithPayload,
 } from '../../utils/reducer/reducer.utils';


export type FetchCategoriesStart  =
    Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = 
    ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;

export type FetchCategoriesFaild = 
    ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>;



export const fetchCategoriesStart = withMatcher (() =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher (
    (categoriesArry: Category[]) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArry));

export const fetchCategoriesFaild = withMatcher ((error: Error) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error));

