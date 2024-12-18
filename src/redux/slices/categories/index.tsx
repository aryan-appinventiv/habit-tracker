import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { habitCategories } from '../../../constants/list';

interface Habit {
  id: string | number;
  name: string;
  clr?: string;
  icon: any; 
  img?: any; 
}

interface CategoriesState {
  habitTypes: Habit[];
}

const initialState: CategoriesState = {
  habitTypes: habitCategories,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Habit>) => {
      state.habitTypes.push(action.payload);
    },
  },
});

export const { addCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
