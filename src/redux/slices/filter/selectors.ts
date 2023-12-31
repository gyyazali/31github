import { RootState } from "../../store";

export const selectSort = (state: RootState) => state.filter.sort;
export const selectCategoryId = (state: RootState) => state.filter.categoryId;
export const selectFilter = (state: RootState) => state.filter;
