import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@services/apiAuth";
import type { User } from "@appTypes/User.interface";

const useUser = () => {
	const { isLoading, data: user } = useQuery<User | null>({
		queryKey: ["user"],
		queryFn: getCurrentUser,
		retry: false,
	});

	return { isLoading, user };
};

export default useUser;
