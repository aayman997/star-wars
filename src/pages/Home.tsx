import StarWarsPeopleList from "@features/starWars/StarWarsPeopleList";
import useStarWarsPeople from "@features/starWars/useStarWarsPeople";
import { useSearchParams } from "react-router-dom";
import Spinner from "@components/Spinner";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function Home() {
	const [searchParams, setSearchParams] = useSearchParams();

	const { data, isLoading } = useStarWarsPeople();

	const nextPage = () => {
		searchParams.set("page", data?.next ?? "");
		setSearchParams(searchParams);
	};
	const previousPage = () => {
		searchParams.set("page", data?.previous ?? "");
		setSearchParams(searchParams);
	};

	return (
		<section className="container mt-8">
			{isLoading && (
				<div className="fixed inset-0 flex items-center justify-center bg-brand-900/70">
					<div className="w-14">
						<Spinner />
					</div>
				</div>
			)}
			<h1 className="stroke stroke-amber-600 text-center text-3xl text-brand-500">Welcome to Star wars</h1>
			<div className="mt-8 flex flex-col gap-y-6 px-4 py-2">
				<div className="flex items-center justify-between">
					<h3 className="text-xl">star wars results</h3>
					<div className="bg-brand-500">filter and sorting</div>
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
