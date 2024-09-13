import * as v from "valibot";

export const CountrySchema = v.object({
    name: v.object({
        official: v.string(),
        common: v.string()
    }),
    flags: v.object({
        svg: v.string(),
        alt: v.optional(v.string())
    }),
    capital: v.optional(v.array(v.string()), []),
    tld: v.optional(v.array(v.string()), []),
    region: v.string(),
    subregion: v.optional(v.string(), "N/A"),
    latlng: v.array(v.number()),
    borders: v.optional(v.array(v.string()), []),
    population: v.number(),
    area: v.number(),
    timezones: v.array(v.string())
});

export type Country = v.InferInput<typeof CountrySchema>;

export const CountryListSchema = v.array(CountrySchema);

export type CountryList = v.InferInput<typeof CountryListSchema>;