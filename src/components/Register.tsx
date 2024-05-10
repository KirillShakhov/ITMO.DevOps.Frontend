import React, {useState} from 'react';
import {register} from '../services/authService';
import {useNavigate} from "react-router-dom";

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleRegisterClick = async () => {
        console.log('handleLoginClick')
        try {
            const response = await register({username, password});
            if (!response.data.success){
                setError(response.data.message);
                return;
            }
            alert('Registration successful, please login.')
            navigate('/login');
        } catch (err) {
            setError('Failed to register: ' + err);
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
                <h1>Register</h1>
                <div
                    onClick={() => {
                        navigate('/login')
                    }}
                >
                    <h3>sign in -&gt;</h3>
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
            <button type="button" onClick={handleRegisterClick}>Register</button>
            <div style={{height: 40}}>
                <p style={{color: '#ff8989'}}>{error}</p>
            </div>
        </div>
    )
        ;
}

export default Register;
