import {Button, Card, CardSubtitle, CardTitle, Col, Container, Row} from "reactstrap";


const StudentFilter = (props) =>{
    return (<div>
        <h2>Students</h2>
        <div>
            <input type={"search"} value={props.studentFilterName}
                   onChange={(event)=>{
                       props.setStudentFilterName(event.target.value);
                   }}/>
            <Button className={"list-open-button"}
                    onClick={()=>{
                        props.setStudentListFlag(!props.studentListFlag);
                    }}>
                V
            </Button>
        </div>
        {props.studentListFlag &&
            <div className={"student-list-container"}>
                <Card className={"student-list-card"}>
                    {props.students.filter((x)=>{
                        if (props.studentFilterName === "") return true;
                        return x.name.includes(props.studentFilterName);
                    }).filter((x)=>{
                        return !props.selectedStudents.includes(x.id);
                    }).map((x, index)=>{
                        return (
                            <Card key={index+x.id+x.name} className={"student-list-item"} onClick={()=>{
                                props.addStudent(x.id)
                            }}>
                                {"Id: " + x.id + " " +x.name + " " + x.surname}
                            </Card>
                        );
                    })}
                </Card>
            </div>
        }
        <div className={"selected-student-container"}>
            <Container>
                <Row>
                    {props.students.filter((x)=>{
                        return props.selectedStudents.includes(x.id);
                    }).map((x,index)=>{
                        return (
                            <Col key={"student"+ index} sm={12} md={6} lg={3.}>
                                <Card  className={"selected-student-card"} onClick={()=>{
                                    props.removeStudent(x.id);
                                }}>
                                    <CardTitle>
                                        {"ID: " + x.id + " " +x.name + " " + x.surname}
                                    </CardTitle>
                                    <CardSubtitle>
                                        {"Email: " + x.email}
                                    </CardSubtitle>
                                </Card>
                            </Col>);
                    })}
                </Row>
            </Container>
        </div>
    </div>);
}


export default StudentFilter;