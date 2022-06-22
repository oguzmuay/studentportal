
import "./AddStudent.css";
import {Button, Card, CardTitle, Form, FormGroup, Input, Label} from "reactstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {authActions} from "../../Store/Authantication/AuthSlice";

const AddStudent = (props) => {

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const onStudentCreateHandler = () =>{

        let emailParse = email.split("@")[1].split(".");
        if (emailParse[0] === "ogr"){
            dispatch(authActions.createNewStudent({
                    name:name,
                    surname:surname,
                    email:email,
                    password:password
            }));
            setName("");
            setSurname("");
            setEmail("");
            setPassword("");
            setMessage("Student Created Successfully ");
        }else{
            setMessage("Invalid Input !");

        }

    }

    return(
        <div className="add-student-page"
             onClick={(event)=>{
                 // Arkadaki siyah alana tiklandiginda ogrenci ekleme componentinin gorunurlugunu belirleyen
                 // bool degiskenini false yapiyoruz bu sekilde component kapanmis oluyor.
                props.studentFlag(false);
             }}>
            <div className="student-card-container"
                 onClick={(event)=>{
                     // Siyah alan disinda bir yere tikladigimizda component'in kapanmamasi icin beyaz
                     // alan icerisinde tiklanildiginda alt componentteki click eventinin cagirilmasini onler.
                    event.stopPropagation();
                }}>
                <Card>
                    <CardTitle tag={"h1"}>
                        Add New Student
                    </CardTitle>
                    <Form
                        onSubmit={(event) => {
                            // Formun icerisindeki create tusuna basildiginda ekranin refresh lenmesini engellemek ve
                            // ogrencinin olusturulmasini saglar.
                            event.preventDefault();
                            onStudentCreateHandler();
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
                        <h2>
                            {message}
                        </h2>
                        <div className="create-button-container">
                            <Button className={"create-button"}>
                                Create
                            </Button>
                        </div>
                    </Form>
                </Card>
            </div>
        </div>);
}


export default AddStudent;