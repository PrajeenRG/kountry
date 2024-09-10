import Image from "next/image";

import styles from "./CountryInfo.module.css";
import Shimmer from "@/icons/Shimmer";

type Country = {
    name: {
        official: string,
        common: string
    },
    tld: string[],
    capital: string[]
    region: string,
    subregion: string,
    latlng: number[],
    area: number,
    population: number,
    timezones: string[],
    startOfWeek: string,
    borders: string[],
    flags: {
        svg: string
    }
}

const Detail = ({ name, content }: { name: string, content: string }) => (<div className={styles.detail}>
    <strong>{name}</strong>
    <p>{content}</p>
</div>);

export default async function CountryInfo({ cca3 }: { cca3: string }) {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
    const countryInfo = (await res.json())[0] as Country;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>{countryInfo.name.common}</h1>
                <h3 className={styles.altTitle}>{countryInfo.name.official}</h3>
            </div>
            <Image className={styles.flag}
                src={countryInfo.flags.svg}
                alt={`${countryInfo.name.common}'s flag`}
                width={300}
                height={200}
                placeholder={`data:image/svg+xml;base64,${Shimmer({ w: 300, h: 200 })}`} />
            <div className={styles.detailBox}>
                <Detail name="Region" content={countryInfo.region} />
                <Detail name="Sub Region" content={countryInfo.subregion} />
                {countryInfo.capital && <Detail name="Capital" content={countryInfo.capital.join(", ")} />}
                <Detail name="Location" content={countryInfo.latlng.map(n => n.toFixed(3)).join(", ")} />
                <Detail name="Area (sq. km)" content={`${countryInfo.area.toLocaleString()}`} />
                <Detail name="Population" content={`${countryInfo.population.toLocaleString()}`} />
                <Detail name="Start of Week" content={countryInfo.startOfWeek.replace(/^\w/, (c) => c.toUpperCase())} />
                {countryInfo.tld && <Detail name="TLD" content={countryInfo.tld.join(" ")} />}
                <Detail name="Timezones" content={countryInfo.timezones.join(", ")} />
                {countryInfo.borders && <Detail name="Borders" content={countryInfo.borders.join(", ")} />}
            </div>
        </div>
    );
}