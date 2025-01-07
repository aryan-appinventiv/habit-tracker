import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateRepeatCompleted } from '../../../utils/firestore/updateRepeatCompleted';

interface Habit {
  id: string | number;
  repeatCompleted?: { [date: string]: number };
  name: string;
  clr?: string;
  icon: any;
  img?: any;
  today?: string;
  todayDay?: number | string;
  frequency?: number[];
  selectedTime?: any;
  repeat?: number;
  completedDates?: string[];
}

interface CategoriesState {
  habitTypes: Habit[];
}

const initialState: CategoriesState = {
  habitTypes: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
        addCategory: (state, action: PayloadAction<Habit>) => {
      const newHabit = {
        ...action.payload,
        repeatCompleted: {},
      };
      state.habitTypes.push(newHabit);
    },
    setCategories: (state, action: PayloadAction<Habit[]>) => {
      state.habitTypes = action.payload;
    },
    removeCategory: (state, action: PayloadAction<string | number>) => {
      state.habitTypes = state.habitTypes.filter(
        habit => habit.id !== action.payload,
      );
    },

    incrementRepeatCompleted: (
      state,
      action: PayloadAction<{ habitId: number | string; date: string }>,
    ) => {
      const { habitId, date } = action.payload;
      const habit = state.habitTypes.find(habit => habit.id === habitId);

      if (habit && habit.repeatCompleted) {
        const currentCount = habit.repeatCompleted[date] || 0;
        if (currentCount < habit.repeat!) {
          habit.repeatCompleted[date] = currentCount + 1;

          updateRepeatCompleted(habitId, date, currentCount + 1);
        }
      }
    },

    decrementRepeatCompleted: (
      state,
      action: PayloadAction<{ habitId: number | string; date: string }>,
    ) => {
      const { habitId, date } = action.payload;
      const habit = state.habitTypes.find(habit => habit.id === habitId);

      if (habit && habit.repeatCompleted) {
        const currentCount = habit.repeatCompleted[date] || 0;
        if (currentCount > 0) {
          habit.repeatCompleted[date] = currentCount - 1;

          updateRepeatCompleted(habitId, date, currentCount - 1);
        }
      }
    },
  },
});

export const {
  addCategory,
  removeCategory,
  incrementRepeatCompleted,
  decrementRepeatCompleted,
  setCategories,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
