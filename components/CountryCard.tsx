"use client";

import Image from "next/image";

import styles from "./CountryCard.module.css";
import Shimmer from "@/icons/Shimmer";
import { ReactNode, useState } from "react";
import { Modal } from "./Modal";
import CloseIcon from "@/icons/CloseIcon";

export default function CountryCard({
  name,
  region,
  flag,
  children,
}: {
  name: string;
  region: string;
  flag: string;
  children?: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.card} onClick={() => setOpen(true)}>
        <Image
          className={styles.flag}
          src={flag}
          alt={`${name}'s flag`}
          width={300}
          height={200}
          placeholder={`data:image/svg+xml;base64,${Shimmer({ w: 300, h: 200 })}`}
        />
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.subtext}>{region}</p>
      </div>
      {open && (
        <Modal>
          {children}
          <button
            className={styles.closeBtn}
            aria-label="close"
            title="close"
            onClick={() => setOpen(false)}
          >
            <CloseIcon className="fill-gray-600 dark:fill-gray-300" size={16} />
          </button>
        </Modal>
      )}
    </>
  );
}
