import { PropsWithChildren } from "react";

export default function CountriesView({ children }: PropsWithChildren) {
    return (
        <div className="grid grid-cols-5 grid-flow-row gap-2 p-2">
            {children}
        </div>
    )
}