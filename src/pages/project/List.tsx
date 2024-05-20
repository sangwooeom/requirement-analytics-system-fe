import Container from "../../components/Container"
import ProjectCard from "../../components/ProjectCard"
import cn from 'classnames';
import styles from './List.module.scss';

export default function ProjectList() {
    return (
        <Container>
            <div className={cn(styles.container)}>
                <div className={cn(styles.header)}>
                    <h1>프로젝트 목록</h1>
                    <div className={cn(styles.addBtnSection)}>
                        <button>프로젝트 추가</button>
                    </div>
                </div>
                <div className={cn(styles.list)}>
                    <ProjectCard />
                    <ProjectCard />
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