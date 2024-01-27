import StarWarsPeopleList from "@features/starWars/StarWarsPeopleList";
import useStarWarsPeople from "@features/starWars/useStarWarsPeople";
import { useSearchParams } from "react-router-dom";
import Spinner from "@components/Spinner";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { HiSearch } from "react-icons/hi";
import type { FormEventHandler } from "react";
import { useRef } from "react";

export default function Home() {
	const [searchParams, setSearchParams] = useSearchParams();
	const { data, isLoading } = useStarWarsPeople();
	const searchQuery = searchParams.get("search") ?? undefined;
	const searchInputRef = useRef<HTMLInputElement>(null);

	const nextPage = () => {
		searchParams.set("page", data?.next ?? "");
		setSearchParams(searchParams);
	};
	const previousPage = () => {
		searchParams.set("page", data?.previous ?? "");
		setSearchParams(searchParams);
	};

	const handleSearch: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const { value } = (e.target as HTMLFormElement).search;
		if (value) {
			searchParams.delete("page");
			searchParams.set("search", value);
			setSearchParams(searchParams);
		}
	};

	const handleSearchClear = () => {
		searchParams.delete("search");
		searchParams.delete("page");
		setSearchParams(searchParams);
		if (searchInputRef.current) {
			searchInputRef.current.value = "";
		}
	};

	return (
		<section className="container mt-8">
			{isLoading && (
				<div className="fixed inset-0 z-[999999] flex items-center justify-center bg-brand-900/70">
					<div className="w-14">
						<Spinner />
					</div>
				</div>
			)}
			<h1 className="stroke stroke-amber-600 text-center text-3xl text-brand-500">Welcome to Star wars</h1>
			<div className="mt-8 flex flex-col items-center justify-center gap-y-2">
				<p className="mb-1 text-xl font-black">Search for your favourite character</p>
				<form className="relative w-[320px] text-richBlack" onSubmit={handleSearch}>
					<input
						className="h-10 w-full rounded-md border border-brand-500 bg-brand-100 pl-2 pr-12 placeholder:text-xs"
						name="search"
						type="search"
						ref={searchInputRef}
						defaultValue={searchQuery}
						placeholder="search your character..."
						aria-label="search your character..."
					/>
					<button
						className="absolute right-0 top-0 z-[2] flex aspect-square h-10 items-center justify-center rounded-r-md bg-brand-500
						text-brand-50 transition-all duration-300 hover:bg-brand-700"
						type="submit"
						aria-label="Search"
					>
						<HiSearch size={24} />
					</button>
					{searchQuery && (
						<button className="ml-2 mt-2 border-b border-b-red-500 text-sm text-red-500" onClick={handleSearchClear} type="button">
							Clear search results
						</button>
					)}
				</form>
			</div>
			<div className="mt-8 flex w-full flex-col gap-y-6 px-4 py-2">
				<div className="flex items-center justify-between">
					<h3 className="text-xl">star wars results</h3>
				</div>
				<StarWarsPeopleList />
				{data?.next || data?.previous ? (
					<div className="ml-auto flex items-center justify-center gap-8">
						{data.previous ? (
							<button
								className="flex items-center justify-center border-2 border-brand-500 px-8 py-2 font-bold capitalize transition-all
								duration-300 hover:-translate-x-2 hover:shadow-2xl"
								onClick={previousPage}
								type="button"
							>
								<HiChevronLeft size={24} />
								previous
							</button>
						) : null}
						{data.next ? (
							<button
								className="flex items-center justify-center border-2 border-brand-500 px-8 py-2 font-bold capitalize transition-all
								duration-300 hover:translate-x-2 hover:shadow-2xl"
								onClick={nextPage}
								type="button"
							>
								next
								<HiChevronRight size={24} />
							</button>
						) : null}
					</div>
				) : null}
			</div>
		</section>
	);
}
