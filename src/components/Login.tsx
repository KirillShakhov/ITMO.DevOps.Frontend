import { useNavigate } from 'react-router-dom';
import {FC, FormEvent, useState} from "react";
import {login} from "../services/authService.ts";



const Login: FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleLogin = async (e: FormEvent) => {
        console.log('handleLogin')


        e.preventDefault();
        try {
            const response = await login({ username, password });
            console.log('response.data: ' + response.data)
            localStorage.setItem('username', response.data.username);
            localStorage.setItem('jwt', response.data.jwt);
            navigate('/');
        } catch (err) {
            setError('Failed to login: ' + e);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default Login;

