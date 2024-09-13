import { CountryList, CountryListSchema, CountrySchema } from "@/schema/country";
import { NextRequest, NextResponse } from "next/server";
import * as v from "valibot";

export const GET = async (req: NextRequest) => {
    "use server";

    const searchParams = req.nextUrl.searchParams;
    const fields = Object.keys(CountrySchema.entries);
    const requestURL = `https://restcountries.com/v3.1/all?fields=${fields.join(",")}`;
    const res: CountryList = await fetch(requestURL).then(res => res.json());
    const countries = v.safeParse(CountryListSchema, res);

    if (countries.success) {
        let results = countries.output;
        if (searchParams.has("q")) {
            const query = searchParams.get("q") ?? "";
            results = results.filter(e => e.name.common.toLocaleLowerCase().startsWith(query));
        }
        return NextResponse.json(results);
    }

    console.log("[ERROR] Schema Parsing Failed", countries.issues);

    return NextResponse.json({
        "error": "schema validation of response failed",
        "reasons": countries.issues.map(issue => issue.message)
    }, {
        status: 500
    });
}