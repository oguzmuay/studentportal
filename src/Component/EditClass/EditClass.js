
import "./EditClass.css";
import {Card} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import SelectStudent from "../SelectStudent/SelectStudent";
import EditStudentForm from "../EditStudentForm/EditStudentForm";
import SelectClass from "../SelectClass/SelectClass";
import EditClassForm from "../EditClassForm/EditClassForm";

const EditClass = (props) => {

    const classes = useSelector(state => state.class.array);

    const [selectedClass, setSelectedClass] = useState(null);

    const [filter, setFilter] = useState("");

    const classFilterFunction = (x) => {
        if (filter === "") return true;
        return !!x.name.includes(filter);

    }

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
                    {selectedClass == null?
                        <SelectClass setFilter={setFilter} classes={classes} filter={filter} classFilterFunction={classFilterFunction} setSelectedClass={setSelectedClass}/>
                        : <EditClassForm setSelectedClass={setSelectedClass} selectedClass={selectedClass}/>}
                </Card>
            </div>
    </div>);
}

export default EditClass;