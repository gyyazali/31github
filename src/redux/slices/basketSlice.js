import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = basketSlice.actions;

export default basketSlice.reducer;
