
import "./MatchPage.css"
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {Button, Card, CardSubtitle, CardTitle, Col, Container, Row} from "reactstrap";
import StudentFilter from "../../Component/StudentFilter/StudentFilter";
import ClassFilter from "../../Component/ClassFilter/ClassFilter";
import {assignmentActions} from "../../Store/AssignmentSlice/AssignmentSlice";
import SecretLayer from "../../SecretLayer";

const MatchPage = (props) => {

    SecretLayer();

    const dispatch = useDispatch();

    const students = useSelector(state => state.auth.user.student);
    const classes = useSelector(state => state.class.array);

    const [studentFilterName, setStudentFilterName] = useState("");
    const [studentListFlag, setStudentListFlag] = useState(false);
    const [selectedStudents, setSelectedStudents] = useState([]);

    const [classFilterName, setClassFilterName] = useState("");
    const [classListFlag, setClassListFlag] = useState(false);
    const [selectedClasses, setSelectedClasses] = useState([]);

    const addStudent = (id) => {
        let tempStudent = [...selectedStudents];
        tempStudent.push(id);
        setSelectedStudents(tempStudent);
    }

    const removeStudent = (id) => {
        let tempStudent = [...selectedStudents];
        for (let i = 0; i < tempStudent.length; i++) {
            if (tempStudent[i] === id)
                tempStudent.splice(i, 1);
        }
        setSelectedStudents(tempStudent);
    }

    const addClass = (id) => {
        let tempClass = [...selectedClasses];
        tempClass.push(id);
        setSelectedClasses(tempClass);
    }

    const removeClass = (id) => {
        let tempClass = [...selectedClasses];
        for (let i = 0; i < tempClass.length; i++) {
            if (tempClass[i] === id)
                tempClass.splice(i, 1);
        }
        setSelectedClasses(tempClass);
    }


    return(
        <div className={"match-page"}>
            <div className={"match-card-container"}>
                <StudentFilter addStudent={addStudent} removeStudent={removeStudent} students={students}
                               selectedStudents={selectedStudents} studentListFlag={studentListFlag}
                               setStudentListFlag={setStudentListFlag} studentFilterName={studentFilterName}
                               setStudentFilterName={setStudentFilterName}
                />
                <ClassFilter addClass={addClass} removeClass={removeClass} classes={classes}
                             classFilterName={classFilterName} classListFlag={classListFlag}
                             selectedClasses={selectedClasses} setClassFilterName={setClassFilterName}
                             setClassListFlag={setClassListFlag} setSelectedClasses={setSelectedClasses}
                />
                <div className={"save-button"}>
                    <Button
                        onClick={()=>{
                            let payload = {students:[...selectedStudents], classes:[...selectedClasses]};
                            dispatch(assignmentActions.addAssignment(payload));
                            setSelectedStudents([]);
                            setSelectedClasses([]);
                            setStudentListFlag(false);
                            setClassListFlag(false);
                    }}>
                        Save
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default MatchPage;