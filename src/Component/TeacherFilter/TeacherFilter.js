import {Fragment , useState} from "react";
import {Badge, Button, Card, FormGroup, Input} from "reactstrap";
import "./TeacherFilter.css"

const TeacherFilter = (props) => {

    return(<Fragment>
        <FormGroup >
            <div className={"teacher-badge-container"}>
                {props.selectedTeachers.map((x, index)=>{
                    return (
                        <Badge key={index+"badge"} className={"teacher-badge"} onClick={()=>{
                            props.removeTeacherFromList(x.id);
                        }}>
                            {x.name + " " + x.surname}
                    </Badge>);
                })}
            </div>
            <Input id={"searchInput"} placeholder={"Search Teacher"} type="search"
                   onChange={(event)=>{
                       props.setTeacherName(event.target.value);
                   }}></Input>
            <Card className={"teacher-filter-container"}>
                {props.teachers.filter((x)=>props.teacherFilterFunction(x)).filter((x)=>{
                    return !props.selectedTeacherIds.includes(x.id);
                }).map((x, index)=>{
                    return <div className={"teacher-add-button"} key={x.name+"teach"+index}
                    onClick={()=>{
                        props.addTeacherToList(x.id);
                    }}>
                        {x.name + " " + x.surname}
                    </div>
                })}
            </Card>
        </FormGroup>
    </Fragment>);
}

export default TeacherFilter;