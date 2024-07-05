import cn from 'classnames';
import styles from './Login.module.scss';
import { Container } from '../../components';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { loginApi } from '../../utils';

export default function Login() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    function onClickLoginButton() {
        loginApi({userId, password})
        .then(({data}: LoginResponse) => {
            console.log(data);
        })
        .catch(({response: {data}}) => {
            console.log(data);
        })
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