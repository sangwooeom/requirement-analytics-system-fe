import { Container } from "@/components";
import styles from './index.module.scss';
import { Button } from "react-bootstrap";
import cn from 'classnames';

export default function ProjectEdit() {
    return (
        <Container>
            <div className={cn(styles.inputForm)}>
                <input className={styles.projectName} placeholder="프로젝트명을 입력해 주세요." />
                <div className={styles.item}>
                    <h3>프로젝트 소개</h3>
                    <textarea />
                </div>
                <div className={cn(styles.item)}>
                    <h3>진행 상태</h3>
                    <select>
                        <option>제안</option>
                        <option>수행</option>
                        <option>종료</option>
                        <option>유지보수</option>
                    </select>
                </div>
                <div className={cn(styles.item)}>
                    <h3>수주 형태</h3>
                    <select>
                        <option>단독</option>
                        <option>컨소시엄</option>
                        <option>하청</option>
                    </select>
                </div>
                <div className={cn(styles.item)}>
                    <h3>프로젝트 기간</h3>
                    <div className={cn(styles.date)}>
                        <input type="date" />
                        <span>부터</span>
                        <input type="date" />
                        <span>까지 프로젝트를 수행할 예정입니다.</span>
                    </div>
                </div>
                <div className={cn(styles.btnGroup)}>
                    <Button variant='outline-secondary'>등록</Button>
                    <Button variant='outline-secondary'>취소</Button>
                </div>
            </div>
        </Container>
    )
}