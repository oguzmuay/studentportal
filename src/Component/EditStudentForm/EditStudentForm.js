
import "./EditStudentForm.css"
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {Fragment, useState} from "react";
import {useDispatch} from "react-redux";
import AuthSlice from "../../Store/Authantication/AuthSlice";
import {initialStudent} from "../../Store/mainData";

const EditStudentForm = (props) => {

    const dispatch = useDispatch();

    const [name, setName] = useState(props.selectedStudent.name);
    const [surname, setSurname] = useState(props.selectedStudent.surname);
    const [email, setEmail] = useState(props.selectedStudent.email);
    const [password, setPassword] = useState(props.selectedStudent.password);

    const editStudentHandler = () => {
        let student = {
            ...initialStudent
        }
        student.name = name;
        student.surname = surname;
        student.email = email;
        student.password = password;
        dispatch(AuthSlice.actions.editStudent({student:student}));
    }

    return (
        <Fragment>
            <Button className={"back-button"} onClick={()=>{
                props.resetStudent();
            }}>Back</Button>
            <h1>{"Edit " + name}</h1>
            <Form
                onSubmit={(event) => {
                    // Formun icerisindeki save tusuna basildiginda ekranin refresh lenmesini engellemek ve
                    // ogrencinin editlenmesini saglar.
                    event.preventDefault();
                    editStudentHandler();
                }} className={"text-start  input-container"}>
                <FormGroup className="input-form-group">
                    <Label for={"nameInput"}>Name</Label>
                    <Input
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        value={name}
                        required
                        id={"nameInput"}
                        type={"text"}>
                    </Input>
                    <Label for={"surnameInput"}>Surname</Label>
                    <Input
                        onChange={(event) => {
                            setSurname(event.target.value);
                        }}
                        value={surname}
                        required
                        id={"surnameInput"}
                        type={"text"}>
                    </Input>
                    <Label for={"emailInput"}>Email</Label>
                    <Input
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        value={email}
                        required
                        id={"emailInput"}
                        type={"email"}>
                    </Input>
                    <Label for={"passwordInput"}>Password</Label>
                    <Input
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        value={password}
                        required
                        id={"passwordInput"}
                        type={"text"}>
                    </Input>
                </FormGroup>
                <div className="edit-button-container">
                    <Button className={"Edit-button"}>
                        Save
                    </Button>
                </div>
            </Form>
        </Fragment>
    );
}

export default EditStudentForm;