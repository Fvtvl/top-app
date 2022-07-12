import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PokemonMainProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    children: ReactNode;
}