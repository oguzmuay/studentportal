import {CardBody, CardTitle, Col, Container, Input, Row} from "reactstrap";
import {Fragment} from "react";
import ClassCard from "../ClassCard/ClassCard";

const SelectClass = (props) => {

    return (
        <Fragment>
            <CardTitle tag={"h1"}>
                Edit Class
            </CardTitle>
            <CardBody>
                <Input id={"searchInput"} placeholder={"Search Class"} type="search"
                       onChange={(event)=>{
                           props.setFilter(event.target.value);
                       }}></Input>
                <div className={"class-grid-container"}>
                    <Container>
                        <Row>
                            {props.classes.filter(x=>props.classFilterFunction(x)).
                            map((x, index) =>{
                                return (
                                    <Col lg={4} md={6} sm={12}
                                         key={x.name + " " + index}>
                                        <ClassCard x={x} setSelectedClass={props.setSelectedClass}/>
                                    </Col>);
                            })}
                        </Row>
                    </Container>
                </div>
            </CardBody>
        </Fragment>
    );
}
//
export default SelectClass;