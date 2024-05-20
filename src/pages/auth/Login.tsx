import cn from 'classnames';
import styles from './Login.module.scss';

export default function Login() {
    return (
        <div className={cn(styles.container)}>
            <div className={cn(styles.loginForm)}>
                <h1 className={cn(styles.title)}>로그인</h1>
                <div className={cn(styles.inputSection)}>
                    <input placeholder='아이디'/>
                    <input type='password' placeholder='비밀번호'/>
                </div>
                <button className={cn(styles.loginBtn)}>로그인</button>
            </div>
        </div>
    )
}