import cn from 'classnames';
import styles from './Login.module.scss';
import { Container } from '../../components';
import { Form, Button } from 'react-bootstrap';

export default function Login() {
    return (
        <Container>
            <div className={cn(styles.loginForm)}>
                <div className={cn(styles.header)}>
                    <h1>요구사항 분석 시스템</h1>
                </div>
                <Form.Group>
                    <Form.Label>아이디</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group>
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Button variant='outline-secondary'>로그인</Button>
            </div>
        </Container>
    )
}