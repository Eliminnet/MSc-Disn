import { getAuth } from "@/api/auth";
import { redirect } from "react-router-dom";

export async function loginLoader() {
	const ok = await getAuth();

	if (ok) {
		throw redirect("/");
	}
}
