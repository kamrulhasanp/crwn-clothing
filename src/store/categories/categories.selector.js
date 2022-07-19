import { createSelector } from 'reselect';

const selectCetegoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCetegoryReducer],
    (categorySlice) => categorySlice.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) =>
    categories.reduce((acc, category) =>{
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    },{})  
);

export const selectCategoriesIsLoading = createSelector(
    [selectCetegoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);

 