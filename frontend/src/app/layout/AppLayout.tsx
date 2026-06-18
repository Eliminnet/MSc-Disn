import { Page } from "@/ui";
import Navbar from "@/ui/core/Navbar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
	return (
		<Page>
			<Navbar title="MSc Project" />
			<main className="page-content">
				<Outlet />
			</main>
		</Page>
	);
}
