import Logo from "@components/Logo";
import { useEffect } from "react";
import { useUser } from "@features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import LoginForm from "@features/authentication/LoginForm";
import SpinnerFullPage from "@components/SpinnerFullPage";

export default function Login() {
	const navigate = useNavigate();
	const { user, isLoading } = useUser();

	useEffect(() => {
		if (user && !isLoading) {
			navigate("/");
		}
	}, [user, isLoading, navigate]);

	if (isLoading && !user) {
		return <SpinnerFullPage />;
	}

	return (
		<div className="mx-auto flex h-dvh w-[560px] items-center justify-center">
			<div className="flex items-center justify-center gap-x-8 rounded-xl border-2 border-brand-200 bg-brand-800 p-8 shadow-2xl">
				<div className="flex basis-2/3 flex-col gap-y-4">
					<h1 className="gap-y-2text-brand-200 text-center text-xl text-brand-200">Welcome to</h1>
					<img className="mx-auto w-28 rounded-xl border-2 border-white" src="/images/starwars-logo.webp" alt="Starwars logo" />
					<div className="mb-4 text-center text-3xl">
						<Logo />
					</div>
				</div>
				<LoginForm />
			</div>
		</div>
	);
}
