import CountriesView from "@/components/CountriesView";
import CountryCard from "@/components/CountryCard";
import CountryInfo from "@/components/CountryInfo";
import NavBar from "@/components/NavBar";
import Search from "@/components/Search";
import Image from "next/image";
import Link from "next/link";

import icon from "./icon1.svg";

type Country = {
  cca3: string,
  name: {
    official: string,
    common: string
  },
  region: string,
  flags: {
    svg: string
  }
}

export default async function Home({ searchParams }: { searchParams: { [key: string]: string } }) {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name,region,flags,cca3");
  let countries = (await res.json()) as Country[];;
  countries.sort((a, b) => a.name.common.localeCompare(b.name.common))

  if (searchParams.search) {
    countries = countries.filter(country => {
      const searchString = searchParams.search.toLowerCase();
      const name = country.name.common.toLowerCase();
      return name.includes(searchString);
    });
  }

  return (
    <div>
      <NavBar>
        <Link className="flex gap-4 place-items-center" href={"/"}>
          <Image src={icon} alt="Kountry Logo" width={36} height={36} />
          <h1 className="text-2xl font-bold">Kountry</h1>
        </Link>
        <Search />
      </NavBar>
      <CountriesView className="mt-28 md:mt-16">
        {countries.map(country => (
          < CountryCard
            key={country.cca3}
            name={country.name.common}
            region={country.region}
            flag={country.flags.svg}>
            <CountryInfo cca3={country.cca3} />
          </CountryCard>)
        )}
      </CountriesView>
    </div >
  );
}
