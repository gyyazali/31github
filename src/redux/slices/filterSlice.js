import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortProperty: {
    name: 'популярное',
    sort: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      console.log(action, 'filter');
      state.activeCategory = action.payload;
    },
  },
});

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
