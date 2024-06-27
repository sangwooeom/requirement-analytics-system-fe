import Container from "../../components/Container"
import styles from './Detail.module.scss';
import cn from 'classnames';

export default function RequirementDetail() {
    return (
        <Container>
            <div className={cn(styles.container)}>
                <table className={cn(styles.infoTable)}>
                    <tr>
                        <td>요구사항 분류</td>
                        <td>기능 요구사항</td>
                    </tr>
                    <tr>
                        <td>요구사항 ID</td>
                        <td>SFR-027</td>
                    </tr>
                    <tr>
                        <td>요구사항 명칭</td>
                        <td>생성형 AI 챗봇(LLM기반)</td>
                    </tr>
                    <tr>
                        <td>산출 정보</td>
                        <td>납품 확인서, Lic 증서, GS 인증서</td>
                    </tr>
                </table>
                <table className={cn(styles.contentTable)}>
                    <colgroup>
                        <col className={cn(styles.itemNo)}/>
                        <col/>
                        <col className={cn(styles.count)}/>
                    </colgroup>
                    <thead>
                        <tr>
                            <td>항목 번호</td>
                            <td>요구사항 상세내용</td>
                            <td>검토 의견 건수</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                ◦ 플랫폼 웹, 앱, 법률구조서비스 기관 홈페이지 등 법률구조 서비스플랫폼 구축사업에 소요되는 검색서비스에 필요한 라이센스를 제공해야 한다.
                            </td>
                            <td>3건</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                ◦ 한국어 형태소 분석기를 포함하여 소스레벨의 기술지원이 가능하여야 함
                            </td>
                            <td>5건</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>
                                ◦ 분산 구조를 지원(로드밸런싱 및 멀티쓰레드 지원) 
                            </td>
                            <td>10건</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>
                                ◦ 대용량 데이터의 실시간 색인 및 관리 성능이 검증된 제품
                            </td>
                            <td>3건</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>
                                ◦ 적합도 재조정, 매치필드 가중치 조정 지원
                            </td>
                            <td>3건</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Container>
    )
}