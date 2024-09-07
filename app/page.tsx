import CountriesView from "@/components/CountriesView";
import CountryCard from "@/components/CountryCard";

type Country = {
  name: string,
  subregion: string,
  flag: string
}


export default async function Home() {
  const res = await fetch("https://restcountries.com/v2/all?fields=name,subregion,flag");
  const countries = (await res.json()) as Country[];
  countries.sort((a, b) => (a.name > b.name) ? 1 : -1);

  return (
    <CountriesView>
      {countries.map(country => <CountryCard
        key={`${country.name.toLowerCase()}`}
        name={country.name}
        subregion={country.subregion}
        flag={country.flag} />)}
    </CountriesView>
  );
}
