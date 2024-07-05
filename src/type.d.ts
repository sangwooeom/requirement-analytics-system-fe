declare interface ContainerProps {
    children?: React.ReactNode;
}

declare interface LoginRequestBody {
    userId: string;
    password: string;
}

declare interface LoginResponseBody {
    accessToken: string;
    refreshToken: string;
}

declare type LoginResponse = AxiosResponse<LoginResponseBody, LoginRequestBody>;