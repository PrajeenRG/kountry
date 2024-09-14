import CountriesView from "@/components/CountriesView";
import CountryCard from "@/components/CountryCard";
import CountryInfo from "@/components/CountryInfo";
import Search from "@/components/Search";
import Image from "next/image";
import Link from "next/link";

import icon from "./icon.svg";
import { CountryListResponse } from "@/schema/country";

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
  const countries = (await res.json()) as CountryListResponse;

  return (
    <div className="p-2 md:p-4 xl:p-8 space-y-4">
      <Link className="flex gap-2 place-items-center" href={"/"}>
        <Image src={icon} alt="Kountry Logo" width={56} height={56} />
        <h1 className="text-3xl font-bold font-branding leading-none text-text">Kountry</h1>
      </Link>
      <Search />
      <CountriesView>
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
    </div>
  );
}
