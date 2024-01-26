import { HiChevronDown } from "react-icons/hi2";
import { clsx } from "clsx";
import { useLogout } from "@features/authentication/useLogout";
import { useUser } from "@features/authentication/useUser";
import { useEffect, useState, useRef } from "react";

export default function UserDropdown() {
	const [isOpen, setIsOpen] = useState(false);
	const dropDown = useRef<HTMLDivElement>(null);
	const { logout, isLoading } = useLogout();
	const { user } = useUser();

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (isOpen && !dropDown?.current?.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}

		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, [isOpen]);

	return (
		<div ref={dropDown} className="relative">
			<button type="button" className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
				<div className="text-white">
					<img className=" h-12 w-12 max-w-12 rounded-md object-cover" src={user!.image} alt={user!.name} />
				</div>
				<span className="ml-2 text-white">{user!.name}</span>
				<div className="ml-2 h-5 w-5 text-white">
					<HiChevronDown size={24} />
				</div>
			</button>

			<div className={clsx("absolute inset-x-0 mt-2 overflow-hidden rounded-md rounded-t-none bg-white shadow-lg", isOpen ? "block" : "hidden")}>
				<button type="button" onClick={() => logout()} className="block w-full px-6 py-2 hover:bg-gray-100" disabled={isLoading}>
					Logout
				</button>
			</div>
		</div>
	);
}
