import cn from 'classnames';
import styles from './index.module.scss';
import { Container } from '@/components';
import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { loginApi } from '@/utils';
import { useAppDispatch, useAppSelector } from '@/hook';
import { saveToken } from './loginSlice';
import { useNavigate } from 'react-router-dom';
import { login, selectToken } from './loginSlice';

export default function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const token = useAppSelector(selectToken());

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        dispatch(login({userId: 'sangwoo.eom', password: '1234'}))
    }, [])

    function onClickLoginButton() {
        dispatch(login({userId: 'sangwoo.eom', password: '12341'}))
        .then(() => {
            navigate('/');
        })
        .catch((res) => {
            console.log(res);
        })
        // loginApi({userId, password})
        // .then(({data}: LoginResponse) => {
        //     dispatch(saveToken(data));
        //     navigate('/');
        // })
        // .catch(({response: { data: { message }}}) => {
        //     alert(message);
        // })
    }

    return (
        <Container>
            <div className={cn(styles.loginForm)}>
                <div className={cn(styles.header)}>
                    <h1>시스템</h1>
                </div>
                <Form.Group>
                    <Form.Label>아이디</Form.Label>
                    <Form.Control onChange={({currentTarget}) => setUserId(currentTarget.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control onChange={({currentTarget}) => setPassword(currentTarget.value)}/>
                </Form.Group>
                <Button variant='outline-secondary' onClick={onClickLoginButton}>로그인</Button>
            </div>
        </Container>
    )
}