import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "@components/Spinner";
import useUser from "@features/authentication/useUser";
import Layout from "@components/layout/Layout";

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
				<div className="w-14">
					<Spinner />
				</div>
			</div>
		);
	}

	//  4. If there IS a user, render the app
	if (user) {
		return (
			<Layout>
				<Outlet />
			</Layout>
		);
	}
}

export default ProtectedRoute;
