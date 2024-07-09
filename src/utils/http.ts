import axios from 'axios';

const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10 * 1000
});

export function loginApi(data: LoginInput): Promise<LoginResponse> {
    return http.post<Token, LoginResponse, LoginInput>('/api/v1/login', data);
}

export function isValidTokenApi(token: string): IsValidTokenResponse {
    return http.get<boolean, IsValidTokenResponse, never>('/api/v1/token/valiation', { headers: { 'Authorization': token}});
}