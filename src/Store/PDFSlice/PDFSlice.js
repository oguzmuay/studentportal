import {createSlice} from "@reduxjs/toolkit";
import {data} from "../mainData";


const pdfSlice = createSlice({
    name: "pdf",
    initialState: data.pdf,
    reducers: {

    }
});

export const pdfActions = pdfSlice.actions;

export default pdfSlice;