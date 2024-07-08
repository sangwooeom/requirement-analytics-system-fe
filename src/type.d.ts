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

declare interface State {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error?: string
}

declare interface LoginState extends State {
    token: Token;
}

declare type LoginResponse = AxiosResponse<Token, LoginInput>;