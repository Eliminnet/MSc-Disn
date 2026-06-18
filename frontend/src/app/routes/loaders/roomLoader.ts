import { redirect } from "react-router-dom";

export function roomLoader({ params }: { params: any }) {
	const roomId = params.roomId;
	if (!roomId) throw redirect("/NotFound");

	const upper = String(roomId).toUpperCase();

	const isValid = /^[A-Z]{4}$/.test(upper);
	if (!isValid) throw redirect("/NotFound");

	if (roomId !== upper) {
		throw redirect(`/room/${upper}`);
	}

	return { roomId };
}
