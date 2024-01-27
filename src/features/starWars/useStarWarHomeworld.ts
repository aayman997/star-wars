import { useQuery } from "@tanstack/react-query";
import { getStarHomeworld } from "@services/apiStarWars";
import type { PlanetType } from "@appTypes/Planet.interface";

const useStarWarHomeworld = ({ homeworldId }: { homeworldId: string | null }) => {
	const {
		isLoading,
		data: starWarHomeworld,
		error,
	} = useQuery<PlanetType | null>({
		queryKey: ["starWarHomeworld", homeworldId],
		queryFn: () => getStarHomeworld({ homeworldId }),
		retry: false,
	});

	return { isLoading, starWarHomeworld, error };
};

export default useStarWarHomeworld;
