"use client";

import { ReactNode, useEffect, useState } from "react";

import styles from "./Modal.module.css";
import CloseIcon from "@/icons/CloseIcon";

export const Modal = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "visible";
        }
    }, []);

    return (
        <div className={`${styles.overlay} ${open ? "" : "hidden"}`}>
            <div className={styles.container}>
                {children}
                <button className={styles.closeBtn} aria-label="close" title="close" onClick={() => setOpen(false)}><CloseIcon className="fill-gray-600 dark:fill-gray-300" size={16} /></button>
            </div>
        </div>
    );
}