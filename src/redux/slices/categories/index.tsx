// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Habit {
//   id: string | number;
//   name: string;
//   clr?: string;
//   icon: any; 
//   img?: any; 
//   tomorrow?: string;
//   tomorrowDay?: number | string;
//   frequency?: number[],
//   selectedTime?: any;
//   repeat?: number;
//   repeatCompleted?: number;
// }

// interface CategoriesState {
//   habitTypes: Habit[];
// }

// const initialState: CategoriesState = {
//   habitTypes: [],
// };

// export const categoriesSlice = createSlice({
//   name: 'categories',
//   initialState,
//   reducers: {
//     addCategory: (state, action: PayloadAction<Habit>) => {
//       state.habitTypes.push(action.payload);
//     },
//     removeCategory: (state, action: PayloadAction<string | number>) => {
//       state.habitTypes = state.habitTypes.filter(
//         (habit) => habit.id !== action.payload
//       );
//     },
//   },
// });

// export const { addCategory, removeCategory } = categoriesSlice.actions;
// export default categoriesSlice.reducer;





// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Habit {
//   id: string | number;
//   name: string;
//   clr?: string;
//   icon: any; 
//   img?: any; 
//   tomorrow?: string;
//   tomorrowDay?: number | string;
//   frequency?: number[];
//   selectedTime?: any;
//   repeat?: number;
//   repeatCompleted?: number;
// }

// interface CategoriesState {
//   habitTypes: Habit[];
// }

// const initialState: CategoriesState = {
//   habitTypes: [],
// };

// export const categoriesSlice = createSlice({
//   name: 'categories',
//   initialState,
//   reducers: {
//     addCategory: (state, action: PayloadAction<Habit>) => {
//       state.habitTypes.push(action.payload);
//     },
//     removeCategory: (state, action: PayloadAction<string | number>) => {
//       state.habitTypes = state.habitTypes.filter(
//         (habit) => habit.id !== action.payload
//       );
//     },
//     incrementRepeatCompleted: (state, action: PayloadAction<number | string>) => {
//       const habit = state.habitTypes.find(habit => habit.id === action.payload);
//       if (habit && habit.repeatCompleted !== undefined && habit.repeatCompleted < habit.repeat!) {
//         habit.repeatCompleted! += 1;
//       }
//     },
//     decrementRepeatCompleted: (state, action: PayloadAction<number | string>) => {
//       const habit = state.habitTypes.find(habit => habit.id === action.payload);
//       if (habit && habit.repeatCompleted !== undefined && habit.repeatCompleted > 0) {
//         habit.repeatCompleted! -= 1;
//       }
//     },
//   },
// });

// export const { addCategory, removeCategory, incrementRepeatCompleted, decrementRepeatCompleted } = categoriesSlice.actions;
// export default categoriesSlice.reducer;





// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Habit {
//   id: string | number;
//   name: string;
//   clr?: string;
//   icon: any;
//   img?: any;
//   tomorrow?: string;
//   tomorrowDay?: number | string;
//   frequency?: number[];
//   selectedTime?: any;
//   repeat?: number;
//   repeatCompleted?: number;
//   completedDates?: string[];  
// }

// interface CategoriesState {
//   habitTypes: Habit[];
// }

// const initialState: CategoriesState = {
//   habitTypes: [],
// };

// export const categoriesSlice = createSlice({
//   name: 'categories',
//   initialState,
//   reducers: {
//     addCategory: (state, action: PayloadAction<Habit>) => {
//       state.habitTypes.push(action.payload);
//     },
//     removeCategory: (state, action: PayloadAction<string | number>) => {
//       state.habitTypes = state.habitTypes.filter(
//         (habit) => habit.id !== action.payload
//       );
//     },
//     incrementRepeatCompleted: (state, action: PayloadAction<{ habitId: number | string; date: string }>) => {
//       const { habitId, date } = action.payload;
//       const habit = state.habitTypes.find(habit => habit.id === habitId);
      
//       if (habit && habit.repeatCompleted !== undefined && habit.repeatCompleted < habit.repeat!) {
//         habit.repeatCompleted! += 1;

//         // If repeatCompleted matches repeat, mark the habit as completed for the given date
//         if (habit.repeatCompleted === habit.repeat) {
//           if (!habit.completedDates) habit.completedDates = [];
//           if (!habit.completedDates.includes(date)) {
//             habit.completedDates.push(date);
//           }
//         }
//       }
//     },
//     decrementRepeatCompleted: (state, action: PayloadAction<{ habitId: number | string; date: string }>) => {
//       const { habitId, date } = action.payload;
//       const habit = state.habitTypes.find(habit => habit.id === habitId);

//       if (habit && habit.repeatCompleted !== undefined && habit.repeatCompleted > 0) {
//         habit.repeatCompleted! -= 1;

//         // If habit was marked as completed for the date, we remove it from completedDates
//         if (habit.completedDates && habit.completedDates.includes(date)) {
//           habit.completedDates = habit.completedDates.filter(d => d !== date);
//         }
//       }
//     },
//   },
// });

// export const { addCategory, removeCategory, incrementRepeatCompleted, decrementRepeatCompleted } = categoriesSlice.actions;
// export default categoriesSlice.reducer;









import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Habit {
//   id: string | number;
//   name: string;
//   clr?: string;
//   icon: any;
//   img?: any;
//   tomorrow?: string;
//   tomorrowDay?: number | string;
//   frequency?: number[];
//   selectedTime?: any;
//   repeat?: number;
//   repeatCompleted?: number;
//   completedDates?: string[];  
// }
interface Habit {
  id: string | number;
  name: string;
  clr?: string;
  icon: any;
  img?: any;
  tomorrow?: string;
  tomorrowDay?: number | string;
  frequency?: number[];
  selectedTime?: any;
  repeat?: number;
  repeatCompleted?: { [date: string]: number }; // Change here
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
    // addCategory: (state, action: PayloadAction<Habit>) => {
    //   state.habitTypes.push(action.payload);
    // },
    addCategory: (state, action: PayloadAction<Habit>) => {
      const newHabit = {
        ...action.payload,
        repeatCompleted: {}, // Initialize as an empty object
      };
      state.habitTypes.push(newHabit);
    },
    removeCategory: (state, action: PayloadAction<string | number>) => {
      state.habitTypes = state.habitTypes.filter(
        (habit) => habit.id !== action.payload
      );
    },
    // Increment completed repeats for a specific habit on a specific date
// incrementRepeatCompleted: (state, action: PayloadAction<{ habitId: number | string; date: string }>) => {
//   const { habitId, date } = action.payload;
//   const habit = state.habitTypes.find(habit => habit.id === habitId);
  
//   if (habit && habit.repeatCompleted !== undefined && habit.repeatCompleted < habit.repeat!) {
//     // Update the repeatCompleted for the specific date
//     habit.repeatCompleted! += 1;

//     // If repeatCompleted matches repeat, mark the habit as completed for the given date
//     if (habit.repeatCompleted === habit.repeat) {
//       if (!habit.completedDates) habit.completedDates = [];
//       if (!habit.completedDates.includes(date)) {
//         habit.completedDates.push(date);
//       }
//     }
//   }
// },

// // Decrement completed repeats for a specific habit on a specific date
// decrementRepeatCompleted: (state, action: PayloadAction<{ habitId: number | string; date: string }>) => {
//   const { habitId, date } = action.payload;
//   const habit = state.habitTypes.find(habit => habit.id === habitId);

//   if (habit && habit.repeatCompleted !== undefined && habit.repeatCompleted > 0) {
//     // Update the repeatCompleted for the specific date
//     habit.repeatCompleted! -= 1;

//     // If habit was marked as completed for the date, we remove it from completedDates
//     if (habit.completedDates && habit.completedDates.includes(date)) {
//       habit.completedDates = habit.completedDates.filter(d => d !== date);
//     }
//   }
// },


// incrementRepeatCompleted: (state, action: PayloadAction<{ habitId: number | string; date: string }>) => {
//   const { habitId, date } = action.payload;
//   const habit = state.habitTypes.find(habit => habit.id === habitId);
  
//   if (habit && habit.repeatCompleted) {
//     // Initialize the count for the date if it doesn't exist
//     if (!habit.repeatCompleted[date]) {
//       habit.repeatCompleted[date] = 0;
//     }

//     // Increment the count for the specific date
//     if (habit.repeatCompleted[date] < habit.repeat!) {
//       habit.repeatCompleted[date] += 1;

//       // If repeatCompleted matches repeat, mark the habit as completed for the given date
//       if (habit.repeatCompleted[date] === habit.repeat) {
//         if (!habit.completedDates) habit.completedDates = [];
//         if (!habit.completedDates.includes(date)) {
//           habit.completedDates.push(date);
//         }
//       }
//     }
//   }
// },

incrementRepeatCompleted: (state, action: PayloadAction<{ habitId: number | string; date: string }>) => {
  const { habitId, date } = action.payload;
  const habit = state.habitTypes.find(habit => habit.id === habitId);
  
  if (habit && habit.repeatCompleted) {
    console.log(`Before increment: ${JSON.stringify(habit.repeatCompleted)}`);
    // ... rest of the logic
    if (!habit.repeatCompleted[date]) {
      habit.repeatCompleted[date] = 0;
    }

    // Increment the count for the specific date
    if (habit.repeatCompleted[date] < habit.repeat!) {
      habit.repeatCompleted[date] += 1;

      // If repeatCompleted matches repeat, mark the habit as completed for the given date
      if (habit.repeatCompleted[date] === habit.repeat) {
        if (!habit.completedDates) habit.completedDates = [];
        if (!habit.completedDates.includes(date)) {
          habit.completedDates.push(date);
        }
      }
    }
    console.log(`After increment: ${JSON.stringify(habit.repeatCompleted)}`);
  }
},

decrementRepeatCompleted: (state, action: PayloadAction<{ habitId: number | string; date: string }>) => {
  const { habitId, date } = action.payload;
  const habit = state.habitTypes.find(habit => habit.id === habitId);

  if (habit && habit.repeatCompleted) {
    // Initialize the count for the date if it doesn't exist
    if (!habit.repeatCompleted[date]) {
      habit.repeatCompleted[date] = 0;
    }

    // Decrement the count for the specific date
    if (habit.repeatCompleted[date] > 0) {
      habit.repeatCompleted[date] -= 1;

      // If habit was marked as completed for the date, we remove it from completedDates
      if (habit.completedDates && habit.completedDates.includes(date)) {
        habit.completedDates = habit.completedDates.filter(d => d !== date);
      }
    }
  }
},
  },
});

export const { addCategory, removeCategory, incrementRepeatCompleted, decrementRepeatCompleted } = categoriesSlice.actions;
export default categoriesSlice.reducer;
