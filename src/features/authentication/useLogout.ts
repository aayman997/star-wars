import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "@services/apiAuth";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { mutate: logout, status } = useMutation({
		mutationFn: logoutApi,
		onSuccess: () => {
			queryClient.removeQueries();
			navigate("/login", { replace: true });
		},
	});
	const isLoading = status === "pending";
	return { logout, isLoading };
};
export default useLogout;
