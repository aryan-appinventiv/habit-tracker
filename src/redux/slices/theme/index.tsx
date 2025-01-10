// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface ThemeState {
//   themeType: string| null | undefined;  
// }

// const initialState: ThemeState = {
//   themeType: 'light',  
// };

// export const themeSlice = createSlice({
//   name: 'theme',
//   initialState,
//   reducers: {
//     changeTheme: (state, action: PayloadAction<string|null|undefined>) => {
//       state.themeType = action.payload;  
//     },
//   },
// });

// export const { changeTheme } = themeSlice.actions;
// export default themeSlice.reducer;







import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeState {
  themeType: string | null | undefined;
}

const initialState: ThemeState = {
  themeType: 'light',
};

const saveThemeToStorage = async (theme: string | null | undefined) => {
  try {
    await AsyncStorage.setItem('themeType', theme || 'light');
  } catch (error) {
    console.error('Failed to save the theme to storage:', error);
  }
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string | null | undefined>) => {
      state.themeType = action.payload;
      saveThemeToStorage(action.payload); // Persist the theme
    },
    loadTheme: (state, action: PayloadAction<string | null | undefined>) => {
      state.themeType = action.payload;
    },
  },
});

export const { changeTheme, loadTheme } = themeSlice.actions;
export default themeSlice.reducer;
