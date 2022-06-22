import {createSlice} from "@reduxjs/toolkit";
import {data} from "../mainData";


const classSlice = createSlice({
    name: "class",
    initialState: data.class,
    reducers: {
        addClass(state, action){
            let payload = action.payload;
            state.array.push(payload.class);
            state.classCount += 1;
            state.classIDCounter += 1;
        },
        removeClass(state, action){
            let classes = state.array;
            let payload = action.payload;
            for (let i = 0; i < classes.length; i++) {
                if (i === payload.id){
                    classes.splice(i,1);
                    state.classCount -= 1;
                    break
                }
            }
        },
        editClass(state, action){
            let classes = state.array;
            let payload = action.payload;
            for (let i = 0; i < classes.length; i++) {
                if (i === payload.class.id){
                    classes[i] = {...payload.class};
                }
            }
        }
    }
});

export const classActions = classSlice.actions;

export default classSlice;
