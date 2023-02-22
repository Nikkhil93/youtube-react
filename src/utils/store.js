import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import commentSlice from "./commentSlice";
import searchSlice from './searchSlice';
import videoDetailsSlice from "./videoDetailsSlice";
import videoListSlice from "./videoListSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    videoDetails: videoDetailsSlice,
    commentSlice: commentSlice,
    chat: chatSlice,
    videoList: videoListSlice
  },
});

export default store;
