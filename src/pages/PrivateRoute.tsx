import { useAppSelector } from "@/utils/hook";
import { selectToken } from "@/store/authSlice";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isValidTokenApi } from "@/utils/http";

export default function PrivateRoute() {
    const token = useAppSelector(selectToken());
    const navigate = useNavigate();

    useEffect(() => {
        isValidToken(token);
        if (token.accessToken == '' || token.refreshToken == '') {
            // navigate('/login');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function isValidToken(token: Token): Promise<boolean> {
        const { accessToken, refreshToken } = token;

        console.log('동작');

        if (accessToken == '' ||  refreshToken == '') return false;

        const { data } = await isValidTokenApi(accessToken);
        console.log(data);
        return data;
    }

    return <Outlet />
}