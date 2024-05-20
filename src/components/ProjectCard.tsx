import cn from 'classnames';
import styles from './ProjectCard.module.scss';

export default function ProjectCard() {
    return (
        <div className={cn(styles.container)}>
            <h3>프로젝트명</h3>
            <p>프로젝트 세부 내용</p>
        </div>
    )
}