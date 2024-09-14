"use client";

import { ReactNode, useEffect } from "react";

import styles from "./Modal.module.css";

export const Modal = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "visible";
    };
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
