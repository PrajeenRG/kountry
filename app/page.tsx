import CountriesView from "@/components/CountriesView";
import CountryCard from "@/components/CountryCard";

type Country = {
  cca3: string,
  name: string,
  region: string,
  flag: string
}


export default async function Home() {
  const res = await fetch("https://restcountries.com/v2/all?fields=name,region,flag,cca3");
  const countries = (await res.json()) as Country[];
  countries.sort((a, b) => (a.name > b.name) ? 1 : -1);

  return (
    <CountriesView>
      {countries.map(country => <CountryCard
        key={country.cca3}
        name={country.name}
        region={country.region}
        flag={country.flag} />)}
    </CountriesView>
  );
}
