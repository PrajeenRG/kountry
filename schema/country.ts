import * as v from "valibot";

export const CountryInfoSchema = v.object({
    name: v.object({
        official: v.string(),
        common: v.string()
    }),
    flags: v.object({
        svg: v.string(),
        alt: v.optional(v.string())
    }),
    cca3: v.pipe(v.string(), v.length(3)),
    capital: v.optional(v.array(v.string()), []),
    tld: v.optional(v.array(v.string()), []),
    region: v.string(),
    subregion: v.optional(v.string(), "N/A"),
    latlng: v.array(v.number()),
    borders: v.optional(v.array(v.string()), []),
    population: v.number(),
    area: v.number(),
    timezones: v.array(v.string()),
    startOfWeek: v.string()
});

export type CountryInfo = v.InferInput<typeof CountryInfoSchema>;

export const CountryInfoResponseSchema = v.pipe(v.array(CountryInfoSchema), v.length(1));

export type CountryInfoReponse = v.InferInput<typeof CountryInfoResponseSchema>;

export const CountryListResponseSchema = v.array(v.pick(CountryInfoSchema, ["name", "flags", "cca3", "region", "population"]));

export type CountryListResponse = v.InferInput<typeof CountryListResponseSchema>;