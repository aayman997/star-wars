import type { ReactNode } from "react";
import Navbar from "@components/layout/Navbar";

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
		</div>
	);
}
