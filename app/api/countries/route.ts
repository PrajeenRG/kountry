import { CountryListResponseSchema } from "@/schema/country";
import { NextRequest, NextResponse } from "next/server";
import * as v from "valibot";

export const GET = async (req: NextRequest) => {
    "use server";

    const query = req.nextUrl.searchParams.get("q")?.trim() ?? "";
    const res = await fetch("https://restcountries.com/v3.1/all");
    try {
        if (!res.ok) {
            throw new Error(`Received bad response from server with status code: ${res.status}`);
        }
        const json = await res.json();
        const countriesListResponse = v.safeParse(CountryListResponseSchema, json);
        if (!countriesListResponse.success) {
            const issues = countriesListResponse.issues.map(issue => issue.message);
            throw new Error(`Response failed validation checks: ${issues.join(", ")}`);
        }

        return NextResponse.json(countriesListResponse.output.filter(c =>
            query.length === 0 || c.name.common.toLocaleLowerCase().startsWith(query)));
    } catch (error) {
        console.log("[ERROR] Data fetching failed", error);
        return NextResponse.json({
            "error": "data fetch failure",
            "reason": (error as Error).message
        }, { status: 500 });
    }
}