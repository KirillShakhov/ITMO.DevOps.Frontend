import {useNavigate} from "react-router-dom";
import {FC, useMemo} from "react";

const Dashboard: FC = () => {
    const navigate = useNavigate();

    const user = useMemo(() => {
        const username = localStorage.getItem('username');
        const jwt = localStorage.getItem('jwt');
        if (!username || !jwt) {
            navigate('/login');
        }
        return {
            username: username,
            jwt: jwt
        };
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('jwt');
        navigate('/login');
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome back, {user.username}!</p>
            <div>
                <h2>Your Details</h2>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Token:</strong> {user.jwt}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default Dashboard;
