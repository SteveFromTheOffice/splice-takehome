import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isLeftFlyoutOpen: false,
  isRightFlyoutOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleLeftSidebar: (state) => {
      state.isLeftFlyoutOpen = !state.isLeftFlyoutOpen;
    },
    toggleRightSidebar: (state) => {
      state.isRightFlyoutOpen = !state.isRightFlyoutOpen;
    },
  },
});

export default uiSlice.reducer;
export const UiActions = uiSlice.actions;
