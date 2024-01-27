import Spinner from "@components/Spinner";
import dateFormatter from "@utils/dateFormatter";
import getIdFromUrl from "@utils/getIdFromUrl";
import useStarWarHomeworld from "@features/starWars/useStarWarHomeworld";
import useStarWarPeople from "@features/starWars/useStarWarPeople";

export default function StarWarPeopleDetails({ peopleId, name }: Readonly<{ peopleId: string | null; name: string }>) {
	const { starWarPeople, isLoading, error } = useStarWarPeople({ peopleId });
	let homeworldId: string | null = null;

	if (typeof starWarPeople?.homeworld === "string") {
		homeworldId = getIdFromUrl(starWarPeople.homeworld, "planets");
	} else if (typeof starWarPeople?.homeworld === "object") {
		homeworldId = getIdFromUrl(starWarPeople.homeworld.url, "planets");
	}

	const { starWarHomeworld, isLoading: isHomeworldLoading, error: isHomeworldError } = useStarWarHomeworld({ homeworldId });

	return (
		<div>
			<p className="flex items-center justify-start gap-x-1">
				<span className="font-heading text-brand-500">Star War</span>
				<span>character:</span>
				<span className="font-bold">{name}</span>
			</p>
			<div className="w-full py-8 text-center">
				{isLoading && (
					<div className="flex h-full flex-col items-center justify-center gap-y-6">
						<p className="flex flex-col items-center justify-center gap-y-6">
							<span>wait a sec,</span>
							<span>
								<span>we are getting your special character:</span>
								<span className="ml-1 font-bold">{name}</span>
							</span>
						</p>
						<div className="w-12">
							<Spinner />
						</div>
					</div>
				)}
				{!isLoading && error && (
					<div className="flex h-full flex-col items-center justify-center gap-y-4">
						<p className="flex flex-col items-center justify-center">
							<span>we are really sorry 😔</span>
							<span>something went wrong while we were trying to get special character</span>
							<span>please try again later</span>
						</p>
					</div>
				)}

				{!isLoading && !error && starWarPeople && (
					<div className="grid grid-cols-2 gap-y-4 text-left">
						<h4
							className="relative -z-[1] col-span-2 text-center text-brand-500 before:absolute before:inset-x-0 before:top-1/2 before:h-[2px]
							before:-translate-y-1/2 before:bg-brand-600"
						>
							<span className="relative z-[1] bg-white px-1 text-lg uppercase tracking-widest">Character details</span>
						</h4>
						<div className="flex flex-col gap-y-0.5">
							<span className="text-charcoal">Name</span>
							<span className="font-medium text-richBlack">{starWarPeople.name}</span>
						</div>
						<div className="flex flex-col gap-y-0.5">
							<span className="text-charcoal">Height</span>
							<span className="font-medium text-richBlack">{`${+starWarPeople.height / 100} M`}</span>
						</div>
						<div className="flex flex-col gap-y-0.5">
							<span className="text-charcoal">Mass</span>
							<span className="font-medium text-richBlack">{`${starWarPeople.mass} KG`}</span>
						</div>
						<div className="flex flex-col gap-y-0.5">
							<span className="text-charcoal">Created date</span>
							<span className="font-medium text-richBlack">{dateFormatter(starWarPeople.created)}</span>
						</div>
						<div className="flex flex-col gap-y-0.5">
							<span className="text-charcoal">Films number</span>
							<span className="font-medium text-richBlack">{`${starWarPeople.films.length} film`}</span>
						</div>
						<div className="flex flex-col gap-y-0.5">
							<span className="text-charcoal">birth year</span>
							<span className="font-medium text-richBlack">{starWarPeople.birth_year}</span>
						</div>
						{isHomeworldLoading && (
							<div className="col-span-2 flex h-full flex-col items-center justify-center gap-y-6">
								<p className="flex flex-col items-center justify-center gap-y-6">
									<span>we are getting planet data</span>
								</p>
								<div className="w-12">
									<Spinner />
								</div>
							</div>
						)}
						{!isHomeworldLoading && !isHomeworldError && starWarHomeworld && (
							<>
								<h4
									className="relative -z-[1] col-span-2 text-center text-brand-500 before:absolute before:inset-x-0 before:top-1/2
									before:h-[2px] before:-translate-y-1/2 before:bg-brand-600"
								>
									<span className="relative z-[1] bg-white px-1 text-lg uppercase tracking-widest">Homeworld details</span>
								</h4>
								<div className="flex flex-col gap-y-0.5">
									<span className="text-charcoal">Name</span>
									<span className="font-medium text-richBlack">{starWarHomeworld.name}</span>
								</div>
								<div className="flex flex-col gap-y-0.5">
									<span className="text-charcoal">Terrain</span>
									<span className="font-medium text-richBlack">{starWarHomeworld.terrain}</span>
								</div>
								<div className="flex flex-col gap-y-0.5">
									<span className="text-charcoal">Climate</span>
									<span className="font-medium text-richBlack">{starWarHomeworld.climate}</span>
								</div>
								<div className="flex flex-col gap-y-0.5">
									<span className="text-charcoal">Residents number</span>
									<span className="font-medium text-richBlack">{starWarHomeworld.residents.length}</span>
								</div>
							</>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
