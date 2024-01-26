import { clsx } from "clsx";
import { useForm, type SubmitHandler } from "react-hook-form";
import useLogin from "@features/authentication/useLogin";
import Spinner from "@components/Spinner";

interface LoginUser {
	username: string;
	password: string;
}

export default function LoginForm() {
	const { login, isLoading } = useLogin();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginUser>();
	const loginHandler: SubmitHandler<LoginUser> = ({ username, password }) => {
		login({ username, password });
	};

	return (
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
				className="mx-auto w-28 rounded-md bg-brand-50 px-6 py-2 font-bold uppercase text-brand-800 transition-all duration-300 hover:-translate-y-1
				hover:shadow-2xl disabled:opacity-70 disabled:hover:-translate-y-0"
				type="submit"
				disabled={isLoading}
			>
				{isLoading && (
					<div className="flex h-8 items-center justify-center">
						<Spinner />
					</div>
				)}
				{!isLoading && "login"}
			</button>
		</form>
	);
}
