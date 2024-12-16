import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../slices/categories'; 
import themeReducer from '../slices/theme'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer, 
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
