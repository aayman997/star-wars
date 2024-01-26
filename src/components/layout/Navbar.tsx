import { Link } from "react-router-dom";
import Logo from "@components/Logo";
import UserDropdown from "@components/UserDropdown";

export default function Navbar() {
	return (
		<nav className="h-20 border-b-2 border-b-brand-800/20 bg-brand-500 py-2 shadow-2xl">
			<div className="container mx-auto flex h-full items-center justify-between">
				<Link to="/" className="h-full">
					<Logo classColor="text-brand-50" withLogo />
				</Link>
				<UserDropdown />
			</div>
		</nav>
	);
}
