import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getStarWarsPeople } from "@services/apiStarWars";

export const useStarWarsPeople = () => {
	const queryClient = useQueryClient();
	const [searchParams] = useSearchParams();
	const search = searchParams.get("search") ?? undefined;

	const filterRaw = searchParams.get("filter") ?? "";
	const [key, value] = filterRaw.split("-");
	const filter = !key || !value ? undefined : { key, value };

	const page = searchParams.get("page") ? searchParams.get("page")! : "1";

	const { isLoading, data, error } = useQuery({
		queryKey: ["starWarsPeople", search, filter, page],
		queryFn: () => getStarWarsPeople({ search, filter, page }),
	});

	// PRE-FETCHING
	if (data?.next) {
		queryClient.prefetchQuery({
			queryKey: ["starWarsPeople", search, filter, data.next],
			queryFn: () => getStarWarsPeople({ search, filter, page: data.next }),
		});
	}

	if (data?.previous) {
		queryClient.prefetchQuery({
			queryKey: ["starWarsPeople", search, filter, data.previous],
			queryFn: () => getStarWarsPeople({ search, filter, page: data.previous }),
		});
	}

	return { isLoading, error, data };
};
