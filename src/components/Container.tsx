import cn from 'classnames';
import styles from './Container.module.scss';

export default function Container(props: ContainerProps) {
    const { children } = props;

    return (<div className={cn(styles.container)}>{children}</div>)
}