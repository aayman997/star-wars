import { useQuery } from "@tanstack/react-query";
import { getStarWarPeople } from "@services/apiStarWars";
import type { PeopleType } from "@appTypes/People.interface";

const useStarWarPeople = ({ peopleId }: { peopleId: string | null }) => {
	const {
		isLoading,
		data: starWarPeople,
		error,
	} = useQuery<PeopleType | null>({
		queryKey: ["starWarPeople", peopleId],
		queryFn: () => getStarWarPeople({ peopleId }),
		retry: false,
	});

	return { isLoading, starWarPeople, error };
};

export default useStarWarPeople;
