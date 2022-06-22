import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./Authantication/AuthSlice";
import classSlice from "./ClassSlice/ClassSlice";
import assignmentSlice from "./AssignmentSlice/AssignmentSlice";
import pdfSlice from "./PDFSlice/PDFSlice";

export const store = configureStore({
    reducer: {
        auth:authSlice.reducer,
        class:classSlice.reducer,
        assignment:assignmentSlice.reducer,
        pdf:pdfSlice.reducer,
    },
})