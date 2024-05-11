import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from "./components/dashboard/Dashboard.tsx";

export interface UserData {
    username: string;
    jwt: string;
}

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard"/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </Router>
    );
}

export default App;
