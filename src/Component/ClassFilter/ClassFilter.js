import {Button, Card, CardSubtitle, CardTitle, Col, Container, Row} from "reactstrap";


const ClassFilter = (props) => {
    return (
        <div>
        <h2>Classes</h2>
        <div>
            <input type={"search"} value={props.classFilterName}
                   onChange={(event)=>{
                       props.setClassFilterName(event.target.value);
                   }}/>
            <Button className={"list-open-button"}
                    onClick={()=>{
                        props.setClassListFlag(!props.classListFlag);
                    }}>
                V
            </Button>
        </div>
            {props.classListFlag &&
                <div className={"class-list-container"}>
                    <Card className={"class-list-card"}>
                        {props.classes.filter((x)=>{
                            if (props.classFilterName === "") return true;
                            return x.name.includes(props.classFilterName);
                        }).filter((x)=>{
                            return !props.selectedClasses.includes(x.id);

                        }).map((x,index)=>{
                            return (
                                <Card key={"i"+index+"card"} className={"class-list-item"} onClick={()=>{
                                    props.addClass(x.id)
                                }}>
                                    {x.name}
                                </Card>
                            );
                        })}
                    </Card>
                </div>
            }
            <div className={"selected-class-container"}>
                <Container>
                    <Row>
                        {props.classes.filter((x)=>{
                            return props.selectedClasses.includes(x.id);
                        }).map((x,index)=>{
                            return (
                                <Col key={"class"+index} sm={12} md={6} lg={3.}>
                                    <Card className={"selected-class-card"} onClick={()=>{
                                        props.removeClass(x.id);
                                    }}>
                                        <CardTitle>
                                            {"ID: " + x.id + " " +x.name}
                                        </CardTitle>
                                        <CardSubtitle>
                                            {"Description: " + x.description}
                                        </CardSubtitle>
                                    </Card>
                                </Col>);
                        })}
                    </Row>
                </Container>
            </div>
    </div>);
}


export default ClassFilter;