import {Card, CardBody, CardSubtitle, CardTitle, Col, Container, Input, Row} from "reactstrap";

import {Fragment} from "react";
import StudentCard from "../StudentCard/StudentCard";

const SelectStudent = (props) => {
 return (
     <Fragment>
         <CardTitle tag={"h1"}>
             Edit Student
         </CardTitle>
         <CardBody>
             <Input id={"searchInput"} placeholder={"Search Student"} type="search"
                    onChange={(event)=>{
                        props.setFilter(event.target.value);
                    }}></Input>
             <div className={"student-grid-container"}>
                 <Container>
                     <Row>
                         {props.students.filter(x=>props.studentFilterFunction(x)).
                         map((x, index) =>{
                             return (
                                 <Col lg={4} md={6} sm={12}
                                      key={x.name + " " + index}>
                                    <StudentCard x={x} setSelectedStudent={props.setSelectedStudent}/>
                                 </Col>);
                         })}
                     </Row>
                 </Container>
             </div>
         </CardBody>
     </Fragment>
 );
}

export default SelectStudent;