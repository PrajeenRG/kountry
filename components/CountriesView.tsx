import { ReactNode } from "react";
import styles from "./CountriesView.module.css";

export default function CountriesView({ className, children }: {
    className?: string,
    children?: ReactNode
}) {
    return (
        <div className={`${styles.container} ${className}`}>
            {children}
        </div>
    )
}