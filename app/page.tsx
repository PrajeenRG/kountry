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
  const url = new URL("/api/countries", process.env.NEXT_PUBLIC_URL);
  if (searchParams.q) {
    url.searchParams.set("q", searchParams.q);
  }

  const res = await fetch(url, {
    headers: {
      "x-vercel-protection-bypass": process.env.VERCEL_AUTOMATION_BYPASS_SECRET ?? ""
    }
  });
  const countries = (await res.json()) as Country[];

  return (
    <>
      <NavBar>
        <Link className="flex gap-4 place-items-center" href={"/"}>
          <Image src={icon} alt="Kountry Logo" width={36} height={36} />
          <h1 className="text-2xl font-bold">Kountry</h1>
        </Link>
        <Search />
      </NavBar>
      <CountriesView className="mt-28 md:mt-16">
        {countries.length === 0 ? "No results found" :
          countries.map(country => (
            < CountryCard
              key={country.cca3}
              name={country.name.common}
              region={country.region}
              flag={country.flags.svg}>
              <CountryInfo cca3={country.cca3} />
            </CountryCard>)
          )}
      </CountriesView>
      <footer className="flex justify-center pb-6 text-opacity-70 text-gray-400">
        <p>Powered by <a className="underline" href="https://restcountries.com" target="_blank">restcountries.com</a></p>
      </footer>
    </>
  );
}
