import styles from "./PokemonMain.module.css"
import { PokemonMainProps } from "./PokemonMain.props";
import cn from 'classnames';


export const PokemonMain = ({  className, children, ...props }: PokemonMainProps): JSX.Element => {
    return (
        <ul
        className={styles.wrapper} {...props}>{children}
        </ul>
        
 
    );
};