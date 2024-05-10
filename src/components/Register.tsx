import React, { useState, FormEvent } from 'react';
import { register } from '../services/authService';

interface Props {
    onRegisterSuccess: () => void;
}

const Register: React.FC<Props> = ({ onRegisterSuccess }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await register({ username, password });
            onRegisterSuccess();
        } catch (err) {
            setError('Failed to register: ' + e);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
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
                <button type="submit">Register</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default Register;
