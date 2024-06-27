import Container from "../../components/Container"
import cn from 'classnames';
import styles from './List.module.scss';
import Pagination from "../../components/Pagination";

export default function RequirementList() {
    return (
        <Container>
            <div className={cn(styles.container)}>
                <h1>요구사항 목록</h1>
                <div className={cn(styles.borderSection)}>
                    <table className={cn(styles.board)}>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>분류</td>
                                <td>명칭</td>
                                <td>작성자</td>
                                <td>등록일</td>
                                <td>수정일</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SFR-027</td>
                                <td>기능 요구사항</td>
                                <td>생성형 AI 챗봇(LLM기반)</td>
                                <td>엄상우</td>
                                <td>2024.06.01</td>
                                <td>2024.06.15</td>
                            </tr>
                        </tbody>
                    </table>
                    <Pagination />
                </div>
            </div>
        </Container>
    )
}