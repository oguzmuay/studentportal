import "./TeacherPageNavigator.css"

import {Card, CardBody, CardImg} from "reactstrap";
import { useNavigate } from "react-router-dom";

const TeacherPageNavigator = (props) => {

    let navigate = useNavigate();

    return (
        <div className="card-container">
            <div className="card-row">
                <Card className="card-column" onClick={(event) => {
                    props.navigatorButtons.addStudent(true);
                }}>
                    <CardImg src="./images/ARTILI.svg" alt="Add Student"/>
                    <CardBody>
                    </CardBody>
                </Card>
                <Card className="card-column" onClick={(event) => {
                    props.navigatorButtons.editStudent(true);
                }}>
                    <CardImg src="./images/ANAHTARLI.svg" alt="Edit Student"/>
                    <CardBody>
                    </CardBody>
                </Card>
            </div>
            <div className="card-row">
                <Card className="card-column" onClick={(event) => {
                    props.navigatorButtons.addClass(true);
                }}>
                    <CardImg src="./images/ARTILI_KITAP.svg" alt="Add Class"/>
                    <CardBody>
                    </CardBody>
                </Card>
                <Card className="card-column" onClick={(event) => {
                    props.navigatorButtons.editClass(true);
                }}>
                    <CardImg src="./images/ANAHTARLI_KITAP.svg" alt="Edit Class"/>
                    <CardBody>
                    </CardBody>
                </Card>
            </div>
            <div className="card-row">
                <Card className="card-column2x" onClick={(event) => {
                    navigate("/match");
                }}>
                    <CardImg src="./images/OGRENCIDEN_KITABA.svg" alt="Add Match"/>
                    <CardBody>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}


export default TeacherPageNavigator;