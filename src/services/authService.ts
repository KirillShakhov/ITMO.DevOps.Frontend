import axios from 'axios';

const API_URL = 'http://88.201.239.41:8080/auth/';

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

interface RegisterResponse {
	data: {
		success: boolean;
		message: string;
	}
}

function login(credentials: Credentials): Promise<AuthResponse> {
	return axios.post(`${API_URL}signin`, credentials);
}

function register(credentials: Credentials): Promise<RegisterResponse> {
	return axios.post(`${API_URL}signup`, credentials);
}

export { login, register };
