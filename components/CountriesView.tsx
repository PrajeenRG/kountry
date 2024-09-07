import { PropsWithChildren } from "react";

import styles from "./CountriesView.module.css";

export default function CountriesView({ children }: PropsWithChildren) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}