import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@services/apiAuth";

export interface UserType {
	email: string;
	role?: string;
}

export const useUser = () => {
	const { isLoading, data: user } = useQuery<UserType | null>({
		queryKey: ["user"],
		queryFn: getCurrentUser,
		retry: false,
	});

	return { isLoading, user };
};
