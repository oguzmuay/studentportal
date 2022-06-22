import "./TeacherPage.css"
import TeacherPageNavigator from "../../Component/TeacherPageNavigator/TeacherPageNavigator";
import {useState} from "react";
import AddStudent from "../../Component/AddStudent/AddStudent";
import AddClass from "../../Component/AddClass/AddClass";
import EditStudent from "../../Component/EditStudent/EditStudent";
import EditClass from "../../Component/EditClass/EditClass";
import SecretLayer from "../../SecretLayer";


const TeacherPage = (props) =>{

    SecretLayer();

    const [addStudentFlag, setAddStudentFlag] = useState(false);
    const [addClassFlag, setAddClassFlag] = useState(false);
    const [editStudentFlag, setEditStudentFlag] = useState(false);
    const [editClassFlag, setEditClassFlag] = useState(false);

    return(
        <div className="teacher-page">
            <TeacherPageNavigator navigatorButtons={{addStudent:setAddStudentFlag,addClass:setAddClassFlag,editStudent:setEditStudentFlag,editClass:setEditClassFlag}}/>
            {
                addStudentFlag && <AddStudent studentFlag={setAddStudentFlag}/>
            }
            {
                addClassFlag && <AddClass classFlag={setAddClassFlag}/>
            }
            {
                editStudentFlag && <EditStudent studentFlag={setEditStudentFlag}/>
            }
            {
                editClassFlag && <EditClass classFlag={setEditClassFlag}/>
            }
        </div>
    );
}

export default TeacherPage;