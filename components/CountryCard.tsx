import Image from "next/image";

import styles from "./CountryCard.module.css";
import Shimmer from "@/icons/Shimmer";

export default function CountryCard({ name, region, flag }: {
  name: string,
  region: string,
  flag: string
}) {
  return (
    <div className={styles.card}>
      <Image className={styles.flag}
        src={flag} alt={`${name}'s flag`}
        width={300}
        height={200}
        placeholder={`data:image/svg+xml;base64,${Shimmer({ width: 300, height: 200 })}`} />
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.subtext}>{region}</p>
    </div>
  );
}