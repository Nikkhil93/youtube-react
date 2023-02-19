import { createSlice } from "@reduxjs/toolkit";
import { commentsData } from "./contants";

const commentSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [commentsData]
    },
    reducers:{
        updateComments: (state, action) => {
            state.comments = [[...state.comments[0], action.payload]]
        },
        resetComments: (state) => {
            state.comments = [commentsData]
        }
    }
})

export const { updateComments, resetComments } = commentSlice.actions;
export default commentSlice.reducer;