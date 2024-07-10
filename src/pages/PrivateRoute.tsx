import { useAppSelector } from "@/utils/hook";
import { selectToken } from "@/store/authSlice";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { isValidTokenApi } from "@/utils/http";
import { Loading } from "@/components";


export default function PrivateRoute() {
    const token = useAppSelector(selectToken());
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        isValidToken(token)
        .then((value) => {
            if (!value) navigate('/login');
            else setLoading(false);
        })
        .catch(() => {
            alert("에러가 발생하였습니다.");
            navigate('/login');
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function isValidToken(token: Token): Promise<boolean> {
        const { accessToken, refreshToken } = token;

        if (accessToken == '' ||  refreshToken == '') return false;

        const { data } = await isValidTokenApi(accessToken);
        return data;
    }

    return (
        <>
            {loading && <Loading />}
            {!loading && <Outlet />}
        </>
    );
}