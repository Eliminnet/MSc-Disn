import { useEffect, useState } from "react";
import { handleJoin } from "@/ws/handleJoin";
import { useNavigate } from "react-router-dom";

export function useJoinRoom() {
	const [roomId, setRoomId] = useState<string>("");
	const [error, setError] = useState<string | null>(null);

	const navigate = useNavigate();

	useEffect(() => {
		setError(null);
		if (roomId.length !== 4) return;

		const joinRoom = async () => {
			const res = await handleJoin(roomId);

			if (res.ok) {
				navigate(`room/${roomId}`, { state: res });
			} else {
				setError(res.error ?? "Failed to join");
			}
		};

		joinRoom();
	}, [roomId]);

	return { roomId, error, setRoomId };
}
