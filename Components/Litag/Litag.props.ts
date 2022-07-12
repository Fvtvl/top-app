import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface LitagProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    children: ReactNode;
    type: 'grass' | 'water' | 'fire' | 'normal' | 'bug';
}