import styles from "./Litag.module.css"
import { LitagProps } from "./Litag.props";
import cn from 'classnames';

export const Litag = ({ children, type = 'normal', className, ...props }: LitagProps): JSX.Element => {
    return (
        <li
        className={cn(styles.wrapper, className, {
            [styles.bug]: type === 'bug',
            [styles.water]: type === 'water',
            [styles.grass]: type === 'grass',
            [styles.fire]: type === 'fire',
            [styles.normal]: type === 'normal',

        })}
        {...props}
        >
            {children}
        </li>
    );
};