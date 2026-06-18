import Navbar from "@/ui/core/Navbar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</>
	);
}
