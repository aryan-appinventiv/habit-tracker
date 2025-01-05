import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Habit {
  id: string | number;
  name: string;
  clr?: string;
  icon: any;
  img?: any;
  today?: string;
  todayDay?: number | string;
  frequency?: number[];
  selectedTime?: any;
  repeat?: number;
  repeatCompleted?: {[date: string]: number};
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
      action: PayloadAction<{habitId: number | string; date: string}>,
    ) => {
      const {habitId, date} = action.payload;
      const habit = state.habitTypes.find(habit => habit.id === habitId);

      if (habit && habit.repeatCompleted) {
        console.log(
          `Before increment: ${JSON.stringify(habit.repeatCompleted)}`,
        );
        if (!habit.repeatCompleted[date]) {
          habit.repeatCompleted[date] = 0;
        }

        if (habit.repeatCompleted[date] < habit.repeat!) {
          habit.repeatCompleted[date] += 1;

          if (habit.repeatCompleted[date] === habit.repeat) {
            if (!habit.completedDates) habit.completedDates = [];
            if (!habit.completedDates.includes(date)) {
              habit.completedDates.push(date);
            }
          }
        }
        console.log(
          `After increment: ${JSON.stringify(habit.repeatCompleted)}`,
        );
      }
    },

    decrementRepeatCompleted: (
      state,
      action: PayloadAction<{habitId: number | string; date: string}>,
    ) => {
      const {habitId, date} = action.payload;
      const habit = state.habitTypes.find(habit => habit.id === habitId);

      if (habit && habit.repeatCompleted) {
        if (!habit.repeatCompleted[date]) {
          habit.repeatCompleted[date] = 0;
        }

        if (habit.repeatCompleted[date] > 0) {
          habit.repeatCompleted[date] -= 1;

          if (habit.completedDates && habit.completedDates.includes(date)) {
            habit.completedDates = habit.completedDates.filter(d => d !== date);
          }
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
