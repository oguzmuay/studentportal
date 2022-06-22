
import "./EditStudent.css";
import {Card, CardBody, CardSubtitle, CardTitle, Col, Container, Input, Row} from "reactstrap";
import {Fragment, useState} from "react";
import {useSelector} from "react-redux";
import SelectStudent from "../SelectStudent/SelectStudent";
import EditStudentForm from "../EditStudentForm/EditStudentForm";
import selectStudent from "../SelectStudent/SelectStudent";


const EditStudent = (props) => {

    const students = useSelector(state => state.auth.user.student);

    const [selectedStudent, setSelectedStudent] = useState(null);

    const [filter, setFilter] = useState("");

    const studentFilterFunction = (x) => {
        if (filter === "") return true;

        if (x.name.includes(filter)) return true;

        return false;
    }

    const resetStudent = () => {
        setSelectedStudent(null);
    }

    return(
        <div className="edit-student-page"
             onClick={(event)=>{
            props.studentFlag(false);
        }}>
            <div className={"edit-student-container"}
                 onClick={(event)=>{
                event.stopPropagation();
            }}>
                <Card>
                    {selectedStudent == null?
                        <SelectStudent setFilter={setFilter} students={students} filter={filter} studentFilterFunction={studentFilterFunction} setSelectedStudent={setSelectedStudent}/>
                        : <EditStudentForm resetStudent={resetStudent} selectedStudent={selectedStudent}/>}
                </Card>
            </div>
        </div>);
}


export default EditStudent;