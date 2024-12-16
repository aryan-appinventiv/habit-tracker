import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  themeType: string;  
}

const initialState: ThemeState = {
  themeType: 'light',  
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.themeType = action.payload;  
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
