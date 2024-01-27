import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { login as loginApi } from "@services/apiAuth";

const useLogin = () => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { status, mutate: login } = useMutation({
		mutationFn: ({ username, password }: { username: string; password: string }) => loginApi({ username, password }),
		onSuccess: (user) => {
			queryClient.setQueryData(["user"], user);
			navigate("/", { replace: true });
		},

		onError: (error: Error) => {
			toast.error(error.message);
		},
	});
	const isLoading = status === "pending";

	return { isLoading, login };
};
export default useLogin;
