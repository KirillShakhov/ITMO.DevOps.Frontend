import {FC, useState} from "react";
import {login} from "../services/authService.ts";
import {useNavigate} from "react-router-dom";


const Login: FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleLoginClick = async () => {
        console.log('handleLoginClick')

        try {
            const response = await login({username, password});
            console.log('response.data: ' + response.data)
            localStorage.setItem('username', response.data.username);
            localStorage.setItem('jwt', response.data.jwt);
            location.replace('/dashboard');
        } catch (err) {
            setError('Failed to login: ' + err);
        }
    };

    return (
        <div style={{
            width: 500,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            gap: 10,
            marginLeft: 60
        }}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'space-between'
                }}
            >
                <h1>Login</h1>
                <div
                    onClick={() => {
                        navigate('/register')
                    }}
                >
                    <h3>sign up -&gt;</h3>
                </div>
            </div>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="button" onClick={handleLoginClick}>Login</button>
            <div style={{height: 40}}>
                <p style={{color: '#ff8989'}}>{error}</p>
            </div>
        </div>
    );
};

export default Login;

