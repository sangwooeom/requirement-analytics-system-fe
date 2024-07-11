import { Container, ProjectCard } from "@/components"
import styles from './index.module.scss';
import cn from 'classnames';


export default function Main() {
    return (
        <Container>
            <div className={cn(styles.section)}>
                <h1>프로젝트 현황</h1>
                <div className={cn(styles.summary)}>
                    <table>
                        <colgroup>
                            <col width="200px"/>
                            <col width="200px"/>
                        </colgroup>
                        <thead>
                            <tr>
                                <td>진행 중인 프로젝트</td>
                                <td>종료된 프로젝트</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10건</td>
                                <td>30건</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={cn(styles.list)}>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </Container>
    )
}