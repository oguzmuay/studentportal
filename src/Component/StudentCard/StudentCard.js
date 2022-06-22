import {Button, Card, CardSubtitle, CardTitle} from "reactstrap";
import "./StudentCard.css"
import {useDispatch} from "react-redux";
import {authActions} from "../../Store/Authantication/AuthSlice";

const StudentCard = (props) => {

    const dispatch = useDispatch();

    return (
        <Card className={"student-card"}>
            <CardTitle tag={"h3"}>
                {"ID: " +props.x.id + " " + props.x.name + " " + props.x.surname}
            </CardTitle>
            <CardSubtitle>
                {"Email: " + props.x.email}
            </CardSubtitle>
            <div className={"button-container"}>
                <Button className={"button"} onClick={()=>{
                    props.setSelectedStudent(props.x);
                }}>Edit</Button>
                <Button className={"button"}
                        onClick={(event)=>{
                    dispatch(authActions.deleteStudent({id:props.x.id}));
                }}>Delete</Button>
            </div>
        </Card>
    );
}

export default StudentCard;