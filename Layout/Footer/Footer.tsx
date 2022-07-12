import styles from "./Footer.module.css"
import { FooterProps } from "./Footer.props";
import cn from 'classnames';
import { format } from "date-fns"

export const Footer = ({  className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer, {

        })} {...props}>
            <div>
            PokeDex © {format(new Date(), "yyyy")}
            </div>
            <a href="#" target="_blanc">Fvtv</a>
            <a href="#" target="_blanc">GitHub</a>
        </footer>
 
    );
};