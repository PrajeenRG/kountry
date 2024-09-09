"use client";

import { ReactNode, useEffect, useState } from "react";

import styles from "./Modal.module.css";
import CloseIcon from "@/icons/CloseIcon";

export const Modal = ({ children }: { children: ReactNode }) => {
    const [close, setClose] = useState(false);

    useEffect(() => {
        document.body.style.overflowY = (close) ? "unset" : "hidden";
    }, [close]);

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                {children}
                <button className={styles.closeBtn} onClick={() => setClose(true)}><CloseIcon className="fill-gray-600 dark:fill-gray-300" size={24} /></button>
            </div>
        </div>
    );
}