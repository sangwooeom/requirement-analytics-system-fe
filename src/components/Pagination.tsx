import cn from 'classnames';
import styles from './Pagination.module.scss';

export default function Pagination() {
    return (
        <div className={cn(styles.pagination)}>
            <a href="#!">&laquo;</a>
            <a href="#!">1</a>
            <a href="#!">2</a>
            <a href="#!">3</a>
            <a href="#!">4</a>
            <a href="#!">5</a>
            <a href="#">&raquo;</a>
        </div>
    )
}