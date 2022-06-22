import "./MainPage.css"
import {Button, Card, CardBody,
    CardSubtitle, CardTitle, Container,
    Form, FormGroup, Input, Label} from "reactstrap"

import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../Store/Authantication/AuthSlice";
import {useState} from "react";

const MainPage = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const message = useSelector(state => state.auth.authentication.message);

    const onSubmitHandler = () => {
        const user = {
            email: email,
            password: password
        }
        dispatch(authActions.login(user));

        //TODO:Navigate to secret route for check if true navigate to login .

    }

    return (
        <div className="main-page">
            <div className={"form-container"}>
                <Container>
                    <Card className={"text-center"}>
                        <CardBody>
                            <CardTitle tag={"h1"}>
                                Trakya Universitesi
                            </CardTitle>
                            <CardSubtitle>
                                Ogrenci/Ogretmen Portali
                            </CardSubtitle>
                            <Form
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    onSubmitHandler();

                                }} className={"text-start  input-container"}>
                                <FormGroup>
                                    <Label for={"emailInput"}>Email</Label>
                                    <Input
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }}
                                        value={email}
                                        required
                                        id={"emailInput"}
                                        type={"email"}>
                                    </Input>
                                    <Label for={"passwordInput"}>Password</Label>
                                    <Input
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                        }}
                                        value={password}
                                        required
                                        id={"passwordInput"}
                                        type={"password"}>
                                    </Input>
                                </FormGroup>
                                <Button className={"sign-in-button"}>
                                    Sign In
                                </Button>
                            </Form>
                            <h2>
                                {message}
                            </h2>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </div>
    );
}

export default MainPage;