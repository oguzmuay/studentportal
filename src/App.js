import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeacherPage from "./Page/TeacherPage/TeacherPage";

import {
    Routes,
    Route,
} from "react-router-dom";
import MainPage from "./Page/MainPage/MainPage";
import MatchPage from "./Page/MatchStudentClass/MatchPage";
import StudentPage from "./Page/StudentPage/StudentPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<MainPage/>}/>
                <Route path="/teacher" element={<TeacherPage/>}/>
                <Route path="/match" element={<MatchPage/>}/>
                <Route path="/student" element={<StudentPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
