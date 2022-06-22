
import "./EditClass.css";
import {Card} from "reactstrap";

const EditClass = (props) => {
    return(
        <div className="edit-class-page"
             onClick={(event)=>{
            props.classFlag(false);
        }}>
            <div className={"edit-class-container"}
                 onClick={(event)=>{
                     event.stopPropagation();
                 }}>
                <Card>

                </Card>
            </div>
    </div>);
}

export default EditClass;