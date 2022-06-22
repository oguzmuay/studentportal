import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeacherPage from "./Page/TeacherPage/TeacherPage";

import {
    Routes,
    Route,
} from "react-router-dom";
import MainPage from "./Page/MainPage/MainPage";
import MatchPage from "./Page/MatchStudentClass/MatchPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/home" element={<TeacherPage/>}/>
                <Route path="/match" element={<MatchPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
