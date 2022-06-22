
import "./AddClass.css";
import {useDispatch, useSelector} from "react-redux";
import {Button, Card, CardTitle, Form, FormGroup, Input, Label} from "reactstrap";
import {useState} from "react";
import TeacherFilter from "../TeacherFilter/TeacherFilter";
import {classActions} from "../../Store/ClassSlice/ClassSlice";
import {initialClass} from "../../Store/mainData";

const AddClass = (props) => {

    const dispatch = useDispatch();

    const teachers = useSelector(state => state.auth.user.teacher);
    const [teacherName, setTeacherName] = useState("");

    const [selectedTeacherIds, setSelectedTeacherIds] = useState([]);

    const classCount = useSelector(state => state.class.classCount);

    const [className, setClassName] = useState("");
    const [classDescription, setDescription] = useState("");
    const [classAKTS, setAKTS] = useState(0);

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

    const onSubmitHandler = (event) => {
        event.preventDefault();
        //TODO: PDF ekleme
        let tempClass = {...initialClass};
        tempClass.id = classCount;
        tempClass.name = className;
        tempClass.description = classDescription;
        tempClass.akts = classAKTS;
        tempClass.teachers = [...selectedTeacherIds]
        dispatch(classActions.addClass({class:tempClass}));
    }

    return(
        <div className="add-class-page"
             onClick={(event)=>{
            props.classFlag(false);
        }}>
            <div className="class-card-container"
                 onClick={(event)=>{
                     event.stopPropagation();
                 }}>
                <Card>
                    <CardTitle tag={"h1"}>
                        Add New Class
                    </CardTitle>
                    <Form className={"class-card-form"} onSubmit={onSubmitHandler}>
                        <FormGroup>
                            <Label for={"nameInput"}>Name</Label>
                            <Input required id={"nameInput"} type={"text"}
                                   onChange={(event)=>{
                                       setClassName(event.target.value);
                                   }}>
                            </Input>
                            <Label for={"descInput"}>Description</Label>
                            <Input required id={"descInput"} type={"text"}
                                   onChange={(event)=>{
                                setDescription(event.target.value);
                            }}></Input>
                            <Label for={"AKTSInput"}>AKTS</Label>
                            <Input required id={"AKTSInput"} type={"number"}
                                   onChange={(event)=>{
                                setAKTS(Number(event.target.value));
                            }}></Input>
                            <Label for={"PDFInput"}>PDF</Label>
                            <Input id={"PDFInput"} type={"file"}></Input>
                        </FormGroup>
                        <TeacherFilter selectedTeachers={teachers.filter((x)=>{
                            return selectedTeacherIds.includes(x.id);
                        })} selectedTeacherIds={selectedTeacherIds} addTeacherToList={addTeacherToList} removeTeacherFromList={removeTeacherFromList} setTeacherName={setTeacherName} teachers={teachers} teacherFilterFunction={teacherFilterFunction}/>
                        <FormGroup className={"button-form-group"}>
                            <Button>Create</Button>
                        </FormGroup>
                    </Form>
                </Card>
            </div>
        </div>
    );
}

export default AddClass;