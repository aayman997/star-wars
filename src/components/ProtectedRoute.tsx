import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "@components/Spinner";
import { useUser } from "@features/authentication/useUser";

function ProtectedRoute() {
	const navigate = useNavigate();
	// 1. Load the authenticated user
	const { isLoading, user } = useUser();

	// 2. If there is No authenticated user, redirect to the /login
	useEffect(() => {
		if (!user && !isLoading) {
			navigate("/login", { replace: true });
		}
	}, [isLoading, navigate, user]);

	// 3. While loading, show a spinner
	if (isLoading) {
		return (
			<div className="flex h-dvh items-center justify-center">
				<Spinner />
			</div>
		);
	}

	//  4. If there IS a user, render the app
	if (user) {
		return (
			<div className="h-dvh w-dvw">
				<Outlet />
			</div>
		);
	}
}

export default ProtectedRoute;
