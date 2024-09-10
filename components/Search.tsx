"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import styles from "./Search.module.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DebounceFunction = (...args: any[]) => void;

function debounce<T extends DebounceFunction>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null;

    return function (...args: Parameters<T>): void {
        if (timeout !== null) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            func(...args);
        }, wait);
    };
}

export default function Search() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (text: string) => {
        const params = new URLSearchParams(searchParams);
        if (text) {
            params.set("search", text);
        } else {
            params.delete("search");
        }

        replace(`${pathname}?${params.toString()}`);
    }

    const debouncedHandler = debounce(handleSearch, 250);

    return <input className={styles.searchBox} type="text"
        placeholder="Search"
        onChange={e => debouncedHandler(e.target.value)} />
}