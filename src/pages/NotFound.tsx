import { HiChevronLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<>
			<style>
				{`
			        #root {
			          height: 100dvh;
			        }
		      `}
			</style>
			<div className="container mx-auto flex h-full w-full items-center justify-center text-center">
				<div className="flex flex-col items-center justify-center gap-y-4 text-center">
					<div className="mt-10">
						<h1>The page you are looking for could not be found 😢</h1>
						<button
							type="button"
							onClick={() => navigate("/", { replace: true })}
							className="text mx-auto mt-4 flex items-center justify-center gap-1 rounded-md border border-brand-500/50 bg-white px-4 py-2
							font-bold text-brand-500 shadow-2xl"
						>
							<HiChevronLeft />
							Go to Homepage
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
