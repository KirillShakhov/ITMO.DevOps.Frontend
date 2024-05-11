import axios from 'axios';
import {API_URL} from "./url.ts";

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
	return axios.post(`${API_URL}/auth/signin`, credentials);
}

function register(credentials: Credentials): Promise<RegisterResponse> {
	return axios.post(`${API_URL}/auth/signup`, credentials);
}

export { login, register };
