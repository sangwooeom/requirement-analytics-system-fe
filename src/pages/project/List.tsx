import {
    Button
} from 'react-bootstrap';
import {
    ProjectCard,
    Container
} from '../../components';
import cn from 'classnames';
import styles from './List.module.scss'

export default function ProjectList() {
    return (
        <Container>
            <div className={cn(styles.section)}>
                <div className={cn(styles.header)}>
                    <h1 className='text-secondary'>프로젝트 목록</h1>
                    <Button variant='outline-secondary'>프로젝트 추가</Button>
                </div>
                <div className={cn(styles.list)}>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </Container>
    )
}