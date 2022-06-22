import {Button, Card, CardSubtitle, CardTitle} from "reactstrap";
import "./ClassCard.css"
import {useDispatch} from "react-redux";
import ClassSlice from "../../Store/ClassSlice/ClassSlice";

const ClassCard = (props) => {

    const dispatch = useDispatch();

    return (
        <Card className={"class-card"}>
            <CardTitle tag={"h3"}>
                {"ID: " +props.x.id + " " + props.x.name}
            </CardTitle>
            <CardSubtitle>
                {"Description: " + props.x.description}
            </CardSubtitle>
            <div className={"button-container"}>
                <Button className={"button"} onClick={()=>{
                    props.setSelectedClass(props.x);
                }}>Edit</Button>
                <Button className={"button"}
                        onClick={(event)=>{
                            dispatch(ClassSlice.actions.removeClass({id:props.x.id}));
                        }}>Delete</Button>
            </div>
        </Card>
    );
}

export default ClassCard;