import Image from "next/image";

import styles from "./CountryCard.module.css";

export default function CountryCard({ name, capitals, flag }: {
    name: string,
    capitals?: string,
    flag: string
}) {
    return (
        <div className={styles.card}>
            <Image className={styles.flag} src={flag} alt={`${name}'s flag`} width={300} height={200} />
            <h3 className={styles.title}>{name}</h3>
            {capitals && <p className={styles.subtext}>{capitals}</p>}
        </div>
    );
}