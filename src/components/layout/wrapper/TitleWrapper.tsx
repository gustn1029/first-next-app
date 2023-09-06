import { LayoutProps } from "@/types/interface";
import classes from './TitleWrapper.module.css';

// title-h1, desc-p tag 사용
export default function TitleWrapper({children}:LayoutProps) {
    return (
        <section className={classes.titleWrap}>
            {children}
        </section>
    )
}