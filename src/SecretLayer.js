import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


const SecretLayer = ()=>{
    const auth = useSelector(state => state.auth.authentication);
    const navigate = useNavigate();

    if (!auth.isLoggedIn)
        navigate("/login");
}

export default SecretLayer;