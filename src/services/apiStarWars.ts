import type { PeopleType } from "@appTypes/People.interface";
import { v4 as uuidv4 } from "uuid";
import isValidUrl from "@utils/isValidUrl";

interface GetStarWarPeople {
	search?: string;
	filter?: {
		key: string;
		value: string;
	};
	page?: string;
}

interface SWAPIResponse<T> {
	count: number;
	next?: string;
	previous?: string;
	results: T[];
}

const getSpecieNameByUrl = async (url: string): Promise<string> => {
	if (!isValidUrl(url)) {
		return "droid";
	}
	const res = await fetch(url);
	if (!res.ok) {
		return "droid";
	}
	const data = await res.json();
	return data.name;
};

const getStarWarsPeople = async ({ search, filter, page }: GetStarWarPeople): Promise<SWAPIResponse<PeopleType>> => {
	const searchParams = new URLSearchParams();
	if (search) {
		searchParams.set("search", search);
	}
	if (page) {
		searchParams.set("page", page);
	}

	if (filter) {
		searchParams.set(filter.key, filter.value);
	}

	let next = null;
	let previous = null;
	const res = await fetch(`${import.meta.env.VITE_SWAPI_API_URL}/people?${searchParams.toString()}`);
	if (!res.ok) {
		throw new Error("Unable to fetch Star War People data");
	}

	const data = await res.json();
	if (data.next) {
		const nextUrl = new URL(data.next);
		const nextSearchParams = new URLSearchParams(nextUrl.search);
		next = nextSearchParams.get("page");
	}
	if (data.previous) {
		const previousUrl = new URL(data.previous);
		const previousSearchParams = new URLSearchParams(previousUrl.search);
		previous = previousSearchParams.get("page");
	}

	const results: PeopleType[] = await Promise.all(
		data.results.map(async (people: PeopleType) => {
			const specieName = await getSpecieNameByUrl(people.species[0] as string);

			return {
				...people,
				image: `https://picsum.photos/seed/${uuidv4()}/200/300`,
				specieName,
			};
		}),
	);

	return {
		...data,
		next: next ?? null,
		previous: previous ?? null,
		results,
	};
};

export { getStarWarsPeople };
