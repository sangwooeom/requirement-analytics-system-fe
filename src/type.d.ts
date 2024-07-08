declare interface ContainerProps {
    children?: React.ReactNode;
}

declare interface LoginInput {
    userId: string;
    password: string;
}
declare interface Token {
    accessToken: string;
    refreshToken: string;
}

declare type LoginResponse = AxiosResponse<Token, LoginInput>;