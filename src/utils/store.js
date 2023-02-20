import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import commentSlice from "./commentSlice";
import searchSlice from './searchSlice';
import videoDetailsSlice from "./videoDetailsSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    videoDetails: videoDetailsSlice,
    commentSlice: commentSlice,
    chat: chatSlice
  },
});

export default store;
