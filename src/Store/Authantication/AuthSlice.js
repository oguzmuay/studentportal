
import {data, initialStudent} from "../mainData";
import {createSlice} from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: data.auth,
    reducers: {
        // Giris yapan kullanicinin ogretmenmi ogrencimi oldugunu anlayip sisteme giris yapan reducer.
        login(state, action){
            const userPayload = action.payload;
            let emailParse = userPayload.email.split("@")[1].split(".");

            let isStudent = false;

            console.log(emailParse);
            if (emailParse[0] === "ogr")
                isStudent = true;

            let isAvailable = false;

            if(isStudent){
                let students = state.user.student;
                for (let i = 0; i < students.length; i++) {
                    if (students[i].email === userPayload.email){
                        if (students[i].password !== userPayload.password){
                            isAvailable = false;
                        }else{
                        isAvailable = true;
                        state.authentication.userID = students[i].id;
                        state.authentication.userTitle = "student";
                        state.authentication.message = "Student logged in successfully";
                        }
                        break;
                    }
                }
            }
            else{
                let teacher = state.user.teacher;
                for (let i = 0; i < teacher.length; i++) {
                    if (teacher[i].email === userPayload.email){
                        if (teacher[i].password !== userPayload.password){
                            isAvailable = false;
                        }else{
                            isAvailable = true;
                            state.authentication.userID = teacher[i].id;
                            state.authentication.userTitle = "teacher";
                            state.authentication.message = "Teacher logged in successfully";
                        }
                        break;
                    }
                }
            }
            if (!isAvailable){
                state.authentication.isLoggedIn = false;
                state.authentication.message = "User is not available !"
            }else{
                state.authentication.isLoggedIn = true;
            }
        },
        createNewTeacher(){
            //TODO: Belki eklenebilir
            },
        // Bir ogretmenin sisteme ogrenci eklemek islemini yaptiginda cagirilan reducer.
        createNewStudent(state, action){
            // Var sayilan ogrenci objesinin bir kopyasini olusturuluyor.
            let studentObj = {...initialStudent}
            // Action payload olarak yollanan ogrenci bilgilerinin tutuldugu payload ataniyor.
            let studentPayload = action.payload;
            // Ogrenci payloadindan yeni ogrenci objesine veriler kopyalaniyor.
            studentObj.email = studentPayload.email;
            studentObj.name = studentPayload.name;
            studentObj.surname = studentPayload.surname;
            studentObj.password = studentPayload.password;
            studentObj.id = state.user.studentIDCounter;
            state.user.studentCount = state.user.studentCount + 1;
            state.user.studentIDCounter = state.user.studentIDCounter + 1;
            // Yeni ogrenci ogrernci dizisine kaydediliyor.
            state.user.student.push(studentObj);
            },
        editStudent(state, action){
            let editedStudent = action.payload.student;
            let students = state.user.student;
            for (let i = 0; i < students.length; i++) {
                if (students[i].id === editedStudent.id){
                    students[i] = editedStudent;
                    break;
                }
            }
            },
        //Ogrenci silmek icin kullanilan fonksiyon.
        deleteStudent(state, action){

            let payload = action.payload;

            let students = state.user.student;

            // Gonderilen id'ye aiy bir ogrenci varmi diye kontrol
            // ediliyor varsa silinip var olan ogrenci sayisi azaltiliyo.
            for (let i = 0; i < students.length; i++) {
                if (students[i].id === payload.id){
                    students.splice(i,1);
                    state.user.studentCount -= 1;
                    break
                }
            }
            // Dummy datada hata olursa diye kontrol.
            if (state.user.studentCount < 0)
                state.user.studentCount = 0;
            },
        }
    });
// authSlice objesi
export default authSlice;

// authSlice icerisinde bulunan actionlar
export const authActions = authSlice.actions;