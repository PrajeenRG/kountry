import { CountryInfoResponseSchema } from "@/schema/country";
import { NextRequest, NextResponse } from "next/server"
import * as v from 'valibot';

export const GET = async (request: NextRequest, { params }: { params: { cca3: string } }) => {
    "use server";

    const cca3 = params.cca3;
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
    try {
        if (!res.ok) {
            throw new Error(`Received bad response from server with status code: ${res.status}`);
        }
        const json = await res.json();
        const countryInfoResponse = v.safeParse(CountryInfoResponseSchema, json);
        if (!countryInfoResponse.success) {
            const issues = countryInfoResponse.issues.map(issue => issue.message);
            throw new Error(`Response failed validation checks: ${issues.join(", ")}`);
        }
        return NextResponse.json(countryInfoResponse.output[0]);
    } catch (error) {
        console.log("[ERROR] Data fetching failed", error);
        return NextResponse.json({
            "error": "data fetch failure",
            "reason": (error as Error).message
        }, { status: 500 });
    }
}