import { createSlice } from "@reduxjs/toolkit";

const videoListSlice = createSlice({
  name: "videoList",
  initialState: {
    videoLists: [],
    isLoading: true,
  },
  reducers: {
    setVideoList: (state, action) => {
      state.videoLists = action.payload;
      state.isLoading = false
    },
    clearVideoList: (state) => {
      state.videoLists = []
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    }
  },
});

export const { setVideoList, clearVideoList, setIsLoading } = videoListSlice.actions;

export default videoListSlice.reducer;
