import {createSlice} from "@reduxjs/toolkit";
import {data, initialAssignment} from "../mainData";


const assignmentSlice = createSlice({
    name: "assignment",
    initialState: data.assignment,
    reducers: {
        addAssignment(state, action){
            let payload = action.payload;
            let students = payload.students;
            let classes = payload.classes;
            console.log(students)
            console.log(classes)
            for (let i = 0; i < students.length; i++) {
                for (let j = 0; j < classes.length; j++) {
                    console.log("Ogrenci"+students[i])
                    console.log("ders"+classes[j])
                    let tempAssignment = {...initialAssignment};
                    tempAssignment.classId = classes[j];
                    tempAssignment.studentId = students[i];
                    state.array.push(tempAssignment);
                }
            }
        }
    }
});

export const assignmentActions = assignmentSlice.actions;

export default assignmentSlice;
