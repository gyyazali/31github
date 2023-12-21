import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filter/slice';
import basket from './slices/basket/slice';
import pizza from './slices/pizza/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter,
    basket,
    pizza,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch
