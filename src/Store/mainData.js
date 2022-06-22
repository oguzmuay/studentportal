


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
        array:[
            {
                id:0,
                name: "0.Ders",
                akts:0,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et eros nec enim ornare efficitur eget vitae diam. Pellentesque erat odio, porta sit amet aliquam at, lacinia at nunc. Nam porta interdum mattis. Etiam vitae placerat velit. Curabitur erat justo, facilisis ut libero a, scelerisque elementum velit. Nulla venenatis commodo.",
                pdf:null,
                teachers:[],
            },{
                id:1,
                name: "1.Ders",
                akts:0,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et eros nec enim ornare efficitur eget vitae diam. Pellentesque erat odio, porta sit amet aliquam at, lacinia at nunc. Nam porta interdum mattis. Etiam vitae placerat velit. Curabitur erat justo, facilisis ut libero a, scelerisque elementum velit. Nulla venenatis commodo.",
                pdf:null,
                teachers:[],
            },{
                id:2,
                name: "2.Ders",
                akts:0,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et eros nec enim ornare efficitur eget vitae diam. Pellentesque erat odio, porta sit amet aliquam at, lacinia at nunc. Nam porta interdum mattis. Etiam vitae placerat velit. Curabitur erat justo, facilisis ut libero a, scelerisque elementum velit. Nulla venenatis commodo.",
                pdf:null,
                teachers:[],
            },{
                id:3,
                name: "asd",
                akts:0,
                description: "",
                pdf:null,
                teachers:[],
            },{
                id:4,
                name: "asd",
                akts:0,
                description: "",
                pdf:null,
                teachers:[],
            }
        ]
    },
    assignment:{
        assignmentCount:0,
        array: [
            {
                classId:0,
                studentId:0,
            },{
                classId:1,
                studentId:0,
            },{
                classId:2,
                studentId:0,
            },
            {
                classId:3,
                studentId:0,
            },
            {
                classId:4,
                studentId:0,
            }
        ]
    },
    pdf:{
        pdfCount:1,
        array:[
            {
                id:0,
                classID:0,
                name:"",
                downloadCount:0,
                url:["./pdfs/1.pdf",
                    "./pdfs/2.pdf",
                    "./pdfs/3.pdf"
                ],
            }
        ]
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
export const initialPDF = {
    id:0,
    classID:-1,
    name:"",
    downloadCount:0,
    url:[],
}
export const initialAssignment = {
    classId:-1,
    studentId:-1,
}
