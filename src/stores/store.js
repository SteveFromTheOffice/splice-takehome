import {configureStore} from "@reduxjs/toolkit";

import themeReducer from "./themeSlice";
import uiReducer from "./uiSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    theme: themeReducer,
  },
});

export default store;
