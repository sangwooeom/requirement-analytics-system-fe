import { Spinner } from "react-bootstrap"
import styles from './index.module.scss';
import cn from 'classnames';

export default function Loading() {
    return (
        <div className={cn(styles.container)}>
            <Spinner animation="border" />
        </div>
    )
}