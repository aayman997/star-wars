import { useStarWarsPeople } from "@features/starWars/useStarWarsPeople";
import StarWarsPeopleCard from "@features/starWars/StarWarsPeopleCard";

export default function StarWarsPeopleList() {
	const { data } = useStarWarsPeople();

	return (
		<div>
			<ul className="grid grid-cols-10 gap-8">
				{data?.results.map((people) => (
					<div key={people.url} className="col-span-2">
						<StarWarsPeopleCard image={people.image} name={people.name} specieName={people.specieName} />
					</div>
				))}
			</ul>
		</div>
	);
}
