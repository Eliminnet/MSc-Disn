import { getAuth } from "@/api/auth";
import { redirect } from "react-router-dom";

export async function authLoader() {
	const ok = await getAuth();

	if (!ok) {
		console.log("sending to login");
		throw redirect("/login");
	}
}
