import cn from 'classnames';
import styles from './index.module.scss';
import { Container } from '@/components';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useAppDispatch } from '@/utils/hook';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../store/authSlice';

export default function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    async function onClickLoginButton() {
        try {
            await dispatch(login({userId, password})).unwrap();
            navigate('/')
        } catch (error) {
            console.log(error);
            alert('로그인이 실패하였습니다.');
        }
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