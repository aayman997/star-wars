import useStarWarsPeople from "@features/starWars/useStarWarsPeople";
import StarWarsPeopleCard from "@features/starWars/StarWarsPeopleCard";

export default function StarWarsPeopleList() {
	const { data } = useStarWarsPeople();

	return (
		<div>
			<ul className="grid grid-cols-10 gap-8">
				{data?.results.length === 0 ? (
					<div className="col-span-4 col-start-4 mt-2 inline-block rounded-md bg-brand-500 py-10 text-center text-2xl text-brand-50 shadow-2xl">
						No results for the current search
					</div>
				) : (
					data?.results.map((people) => (
						<div key={people.url} className="col-span-2">
							<StarWarsPeopleCard image={people.image} name={people.name} specieName={people.specieName} url={people.url} />
						</div>
					))
				)}
			</ul>
		</div>
	);
}
