import { RootState } from "../store"; // Import the RootState type from your store setup

// Selector to get the current theme
export const selectTheme = (state: RootState) => state.theme.themeType;
