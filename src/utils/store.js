import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import commentSlice from "./commentSlice";
import searchSlice from './searchSlice';
import videoDetailsSlice from "./videoDetailsSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    videoDetails: videoDetailsSlice,
    commentSlice: commentSlice
  },
});

export default store;
