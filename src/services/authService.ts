import axios from 'axios';

const API_URL = 'http://192.168.0.43:8080/auth/';

interface Credentials {
	username: string;
	password: string;
}

interface AuthResponse {
	data: {
		username: string;
		jwt: string;
	}
}

function login(credentials: Credentials): Promise<AuthResponse> {
	return axios.post(`${API_URL}signin`, credentials);
}

function register(credentials: Credentials): Promise<void> {
	return axios.post(`${API_URL}signup`, credentials);
}

export { login, register };
