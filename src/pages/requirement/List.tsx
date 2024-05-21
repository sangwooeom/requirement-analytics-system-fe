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
                                <td>요구사항 ID</td>
                                <td>순번</td>
                                <td>요구사항 명칭</td>
                                <td>세부 요구사항</td>
                                <td>관련 여부</td>
                                <td>구현 방식</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SFR-027</td>
                                <td>1</td>
                                <td>생성형 AI 챗봇(LLM기반)</td>
                                <td>
                                    (생성형 언어 모델(LLM) 도입 요건) 텍스트 생성의 동시처리 성능을 고려하여 언어모델(LM)의 파라미터 수는 8B 이하, 컨텍스트 길이가 10K 이상인 모델을 제시
                                </td>
                                <td>O</td>
                                <td>솔루션</td>
                            </tr>
                        </tbody>
                    </table>
                    <Pagination />
                </div>
            </div>
        </Container>
    )
}