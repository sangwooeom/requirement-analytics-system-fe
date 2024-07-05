import axios from 'axios';

const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10 * 1000
});

export function loginApi(requestBody: LoginRequestBody): Promise<LoginResponse> {
    return http.post<LoginResponseBody, LoginResponse, LoginRequestBody>('/api/v1/login', requestBody);
}