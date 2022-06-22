


export const data = {
    auth:{
        user:{
            studentCount:4,
            studentIDCounter:4,
            teacherCount:2,
            teacherIDCount:2,
            student:[
                {
                    id:0,
                    name:"Ogrenci",
                    surname:"Ogrenci Soyadi",
                    email:"ogrenci@ogr.trakya.edu.tr",
                    password:"pass"
                },
                {
                    id:1,
                    name:"Ogrenci",
                    surname:"Ogrenci Soyadi",
                    email:"ogrenci@ogr.trakya.edu.tr",
                    password:"pass"
                },
                {
                    id:2,
                    name:"Ogrenci",
                    surname:"Ogrenci Soyadi",
                    email:"ogrenci@ogr.trakya.edu.tr",
                    password:"pass"
                },
                {
                    id:3,
                    name:"Ogrenci",
                    surname:"Ogrenci Soyadi",
                    email:"ogrenci@ogr.trakya.edu.tr",
                    password:"pass"
                }
            ],
            teacher:[
                {
                    id:0,
                    name:"Ogretmen",
                    surname:"Ogretmen Soyadi",
                    email:"ogretmen@ogretim.trakya.edu.tr",
                    password:"pass"
                },
                {
                    id:1,
                    name:"Ahmet",
                    surname:"Bey",
                    email:"ahmetbey@ogretim.trakya.edu.tr",
                    password:"pass"
                }
            ],
        },
        authentication:{
            isLoggedIn:false,
            message:"",
            userID:"",
            userTitle:"",
        }
    },
    class:{
        classCount:0,
        classIDCounter:0,
        array:[]
    },
    assignment:{
        assignmentCount:0,
        array: []
    }
}

export const initialStudent = {
    id:0,
    name:"",
    surname:"",
    email:"",
    password:""
}
export const initialTeacher = {
    id:0,
    name:"",
    surname:"",
    email:"",
    password:""
}
export const initialClass = {
    id:0,
    name: "",
    akts:0,
    description: "",
    pdf:null,
    teachers:[],
}
