
import "./EditClassForm.css"
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {useState, Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import TeacherFilter from "../TeacherFilter/TeacherFilter";
import ClassSlice from "../../Store/ClassSlice/ClassSlice";
import { initialClass } from "../../Store/mainData";

const EditClassForm = (props) =>{

    const dispatch = useDispatch();

    const [className, setClassName] = useState(props.selectedClass.name);
    const [classDescription, setDescription] = useState(props.selectedClass.description);
    const [classAKTS, setAKTS] = useState(props.selectedClass.akts);

    const [selectedTeacherIds, setSelectedTeacherIds] = useState([...props.selectedClass.teachers]);

    const teachers = useSelector(state => state.auth.user.teacher);
    const [teacherName, setTeacherName] = useState("");

    const addTeacherToList = (id) => {
        let tempList = [...selectedTeacherIds];
        tempList.push(id);
        setSelectedTeacherIds(tempList);
        console.log(id);
    }
    const removeTeacherFromList = (id) => {
        let tempList = [...selectedTeacherIds];
        let index = tempList.indexOf(id);
        if (index !== -1) {
            tempList.splice(index, 1);
        }
        setSelectedTeacherIds(tempList);
    }

    const teacherFilterFunction = (teacher) => {
        // Filtrelemek icin bir girdi yoksa butun hepsi gozukmesi icin.
        if (teacherName === "") return true;
        // Eger ki ogretmen daha once secilmisse eklenmeyecek.
        // Ogretmenin adi filtrelemeye uyuyorsa eklenecek.
        if (teacher.name.includes(teacherName)) return true;
        // Hicbiri degilse eklenmiyor.
        return false;
    }
    return(
        <Fragment>
            <Button className={"back-button"} onClick={()=>{
                props.setSelectedClass(null);
            }}>Back</Button>
            <h1>{"Edit " + className}</h1>
            <Form
                onSubmit={(event) => {
                    // Formun icerisindeki save tusuna basildiginda ekranin refresh lenmesini engellemek ve
                    // ogrencinin editlenmesini saglar.
                    event.preventDefault();
                }} className={"text-start  input-container"}>
                <FormGroup className="input-form-group">
                    <Label for={"nameInput"}>Name</Label>
                    <Input
                        onChange={(event) => {
                            setClassName(event.target.value);
                        }}
                        value={className}
                        required
                        id={"nameInput"}
                        type={"text"}>
                    </Input>
                    <Label for={"descInput"}>Description</Label>
                    <Input
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}
                        value={classDescription}
                        required
                        id={"descInput"}
                        type={"textarea"}>
                    </Input>
                    <Label for={"aktsInput"}>AKTS</Label>
                    <Input
                        onChange={(event) => {
                            setAKTS(Number(event.target.value));
                        }}
                        value={classAKTS}
                        required
                        id={"aktsInput"}
                        type={"number"}>
                    </Input>
                    <Label for={"PDFInput"}>PDF</Label>
                    <Input id={"PDFInput"} type={"file"}></Input>
                    <TeacherFilter selectedTeachers={teachers.filter((x)=>{
                        return selectedTeacherIds.includes(x.id);
                    })} selectedTeacherIds={selectedTeacherIds} addTeacherToList={addTeacherToList} removeTeacherFromList={removeTeacherFromList} setTeacherName={setTeacherName} teachers={teachers} teacherFilterFunction={teacherFilterFunction}/>
                </FormGroup>
                <div className="edit-button-container">
                    <Button className={"Edit-button"} onClick={
                        () => {
                            let tempClass = {...initialClass}
                            tempClass.name = className;
                            tempClass.description = classDescription;
                            tempClass.akts = classAKTS;
                            tempClass.id = props.selectedClass.id;
                            tempClass.teachers = selectedTeacherIds;
                            tempClass.pdf = props.selectedClass.pdf;
                            dispatch(ClassSlice.actions.editClass({class:tempClass}));
                        }
                    }>
                        Save
                    </Button>
                </div>
            </Form>
        </Fragment>
    );
}

export default EditClassForm;