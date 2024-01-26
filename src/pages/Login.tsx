import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import Logo from "@components/Logo";
import useLogin from "@features/authentication/useLogin";
import { clsx } from "clsx";

interface LoginUser {
	username: string;
	password: string;
}

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginUser>();

	const { login, isLoading } = useLogin();
	const loginHandler: SubmitHandler<LoginUser> = ({ username, password }) => {
		login({ username, password });
	};

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
				<form onSubmit={handleSubmit(loginHandler)} className="flex flex-col gap-y-6 text-brand-200">
					<div className="flex flex-col gap-y-2">
						<label className="capitalize" htmlFor="username">
							username
						</label>
						<input
							className="h-10 rounded-md px-4 text-richBlack"
							type="text"
							id="username"
							disabled={isLoading}
							{...register("username", {
								required: {
									value: true,
									message: "please enter your username",
								},
							})}
						/>
						<span
							style={{
								animationIterationCount: 3,
								animationFillMode: "both",
							}}
							className={clsx(
								"ml-1 mt-1 h-4 w-full text-left text-xs font-medium text-red-400 transition-all duration-300",
								errors.username ? "animate-bounce opacity-100" : "opacity-0",
							)}
						>
							{errors?.username?.message ?? ""}
						</span>
					</div>
					<div className="flex flex-col gap-y-2">
						<label className="capitalize" htmlFor="password">
							password
						</label>
						<input
							className="h-10 rounded-md px-4 text-richBlack"
							type="password"
							id="password"
							disabled={isLoading}
							{...register("password", {
								required: {
									value: true,
									message: "please enter your password",
								},
							})}
						/>
						<span
							style={{
								animationIterationCount: 3,
								animationFillMode: "both",
							}}
							className={clsx(
								"ml-1 mt-1 h-4 w-full text-left text-xs font-medium text-red-400 transition-all duration-300",
								errors.password ? "animate-bounce opacity-100" : "opacity-0",
							)}
						>
							{errors?.password?.message ?? ""}
						</span>
					</div>
					<button
						className="mx-auto rounded-md bg-brand-50 px-6 py-2 font-bold uppercase text-brand-800 transition-all duration-300
						hover:-translate-y-1 hover:shadow-2xl"
						type="submit"
						disabled={isLoading}
					>
						login
					</button>
				</form>
			</div>
		</div>
	);
}
