import Image from "next/image";

export default function CountryCard({ name, capitals, flag }: {
    name: string,
    capitals?: string,
    flag: string
}) {
    return (
        <div className="p-2 bg-zinc-700 rounded-md">
            <Image className="rounded-md overflow-hidden aspect-[4/3] object-cover" src={flag} alt={`${name}'s flag`} width={300} height={200} />
            <h3 className="mt-2 font-bold">{name}</h3>
            {capitals && <p className="mt-1">{capitals}</p>}
        </div>
    );
}