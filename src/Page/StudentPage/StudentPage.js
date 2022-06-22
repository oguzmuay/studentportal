
import "./StudentPage.css"
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardTitle,
    Col,
    Container,
    Form,
    FormGroup, Input, Label,
    Row
} from "reactstrap";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../Store/Authantication/AuthSlice";
import {initialStudent} from "../../Store/mainData";
import SecretLayer from "../../SecretLayer";

const StudentPage = () =>{

    SecretLayer();

    const dispatch = useDispatch();
    const studentID = useSelector(state => state.auth.authentication.userID);;

    const student = useSelector(state => state.auth.user.student).filter((x)=>{
        return x.id === studentID;
    })[0];

    let assignments = useSelector(state => state.assignment.array).filter((x)=>{
        return x.studentId === studentID;
    });
    const classes = useSelector(state => state.class.array).filter((clas)=>{
        return assignments.some(assignment=>{
             return assignment.classId === clas.id;
        })
    });

    const pdfs = useSelector(state => state.pdf.array).filter(x=>{
        return classes.some(clas=>{
            return clas.id === x.classID;
        })
    })
    const [myClassFlag, setMyClassFlag] = useState(false);
    const [studentAccountFlag, setStudentAccountFlag] = useState(false);

    const [name, setName] = useState(student.name);
    const [surname, setSurname] = useState(student.surname);
    const [email, setEmail] = useState(student.email);
    const [password, setPassword] = useState(student.password);

    return(
        <div className={"student-page"}>
            <h1 className={"student-page-title"}>
                Student Portal
            </h1>
            <div className={"student-action-button-container"}>
                <Row>
                    <Col>
                        <Card className={"student-navigator"} onClick={()=>{
                            setMyClassFlag(true);
                        }}>
                            <CardImg src="./images/ARTILI_KITAP.svg" alt="Add Student"/>
                        </Card>
                    </Col>

                    <Col>
                        <Card className={"student-navigator"} onClick={()=>{
                            setStudentAccountFlag(true);
                        }}>
                            <CardImg src="./images/ANAHTARLI.svg" alt="Add Student"/>
                        </Card>
                    </Col>
                </Row>
            </div>
            {
                myClassFlag &&
                <div className={"my-class"} onClick={()=>{
                    setMyClassFlag(false);
                }
                }>
                    <div className={"my-class-container"}>
                        <Card onClick={(event)=>{
                            event.stopPropagation();
                            }
                        }>
                            <CardTitle tag={"h1"}>My Classes</CardTitle>
                            <CardBody>
                                <Container>
                                    <Row>
                                {classes.map((x,index)=>{

                                    let pdf = pdfs.filter(x=>{
                                        return x.classID === x.id;
                                    })

                                   return <Col xs={12} md={6} lg={4} key={"class" + index}>
                                       <Card className={"student-class-card"}>
                                           <CardTitle>
                                               {"Name: "+x.name}
                                           </CardTitle>
                                           <CardSubtitle>
                                               {"Description: "+x.description}
                                           </CardSubtitle>
                                           <CardSubtitle>
                                               {"Akts: " +x.akts}
                                           </CardSubtitle>
                                           <CardBody>
                                               {pdf.map(x=>{
                                                   return x.url.map((url,index)=>{
                                                      return <a className={"link-button"} key={x.name + "" + index} href={url} download={"File"+index} target='_blank'>
                                                           <Button>{"File " + index}</Button>
                                                       </a>
                                                   })
                                               })}
                                           </CardBody>
                                       </Card>
                                   </Col>
                                })}
                                    </Row>
                                </Container>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            }
            {
                studentAccountFlag &&
                <div className={"student-account"} onClick={()=>{
                    setStudentAccountFlag(false);
                }
                }>
                    <div className={"student-account-container"}>
                        <Card onClick={(event)=>{
                            event.stopPropagation();
                        }}>
                            <CardTitle tag={"h1"}>{student.name+ " " +student.surname}</CardTitle>
                            <CardBody>
                                <Form onSubmit={(event)=>{
                                    event.preventDefault();
                                    let tempStudent = {...initialStudent}
                                    tempStudent.name = name;
                                    tempStudent.surname = surname;
                                    tempStudent.email = email;
                                    tempStudent.password = password;
                                    dispatch(authActions.editStudent({student:tempStudent}))
                                }}>
                                    <FormGroup>
                                        <Label for={"nameInput"}>Name</Label>
                                        <Input value={name} type={"text"} id={"nameInput"} onChange={(event)=>{
                                            setName(event.target.value);
                                        }
                                        }/>
                                        <Label for={"surnameInput"}>Surname</Label>
                                        <Input value={surname} type={"text"} id={"surnameInput"} onChange={(event)=>{
                                            setSurname(event.target.value);
                                        }
                                        }/>
                                        <Label for={"emailInput"}>Email</Label>
                                        <Input value={email} type={"email"} id={"emailInput"} onChange={(event)=>{
                                            setEmail(event.target.value);
                                        }
                                        }/>
                                        <Label for={"passwordInput"}>Password</Label>
                                        <Input value={password} id={"passwordInput"} onChange={(event)=>{
                                            setPassword(event.target.value);
                                        }
                                        }/>
                                    </FormGroup>
                                    <div className={"button-container"}>
                                        <Button> Save </Button>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            }
    </div>);
}

export default StudentPage;

/*
*                                                <a href={ExampleDoc} download="MyExampleDoc" target='_blank'>
                                                   <Button className={classes.navLink}>My Example Doc</Button>
                                               </a>*/