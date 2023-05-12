import {createSlice} from "@reduxjs/toolkit";

const MODE_LIGHT = {
  name: "light",
  bgColorPrimary: "#FFF",
  bgColorSecondary: "#F7F9FB",
  bgColorTertiary: "#EAECEE",
  colorPrimary: "#000",
  colorSecondary: "#00000066",
};

const MODE_DARK = {
  name: "dark",
  bgColorPrimary: "#1C1C1C",
  bgColorSecondary: "#ffffff11",
  bgColorTertiary: "#ffffff22",
  colorPrimary: "#FFF",
  colorSecondary: "#ffffff66",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: MODE_LIGHT,
  reducers: {
    toggleMode: (state) => {
      if (state.name === "light") {
        return (state = MODE_DARK);
      }
      return (state = MODE_LIGHT);
    },
  },
});

export default themeSlice.reducer;
export const ThemeActions = themeSlice.actions;
