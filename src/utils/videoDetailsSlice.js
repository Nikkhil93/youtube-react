import { createSlice } from "@reduxjs/toolkit";

const videoDetailsSlice = createSlice({
  name: "videoDetails",
  initialState: {
    metaData:{}
  },
  reducers: {
    setmetaData: (state, action) => {
      state.metaData = action.payload
    },
    clearMetaData: (state) => {
      state.metaData = {}
    }
  },
});

export const { setmetaData, clearMetaData } = videoDetailsSlice.actions;

export default videoDetailsSlice.reducer;
