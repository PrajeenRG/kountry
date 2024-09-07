import Image from "next/image";

import styles from "./CountryCard.module.css";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) => Buffer.from(str).toString("base64");

export default function CountryCard({ name, subregion, flag }: {
    name: string,
    subregion: string,
    flag: string
}) {
    return (
        <div className={styles.card}>
            <Image className={styles.flag}
                src={flag} alt={`${name}'s flag`}
                width={300}
                height={200}
                placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(300, 200))}`} />
            <h3 className={styles.title}>{name}</h3>
            <p className={styles.subtext}>{subregion}</p>
        </div>
    );
}