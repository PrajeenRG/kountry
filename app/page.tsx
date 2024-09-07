import CountriesView from "@/components/CountriesView";
import CountryCard from "@/components/CountryCard";

type Country = {
  name: {
    common: string,
    official: string
  },
  capital?: string[],
  flags: {
    png: string,
    svg: string
  }
}


export default async function Home() {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags");
  const countries = (await res.json()) as Country[];
  countries.sort((a, b) => (a.name.common > b.name.common) ? 1 : -1);

  return (
    <CountriesView>
      {countries.map(country => <CountryCard
        key={`${country.name.official}`}
        name={country.name.common}
        capitals={country.capital?.join(", ")}
        flag={country.flags.svg} />)}
    </CountriesView>
  );
}
