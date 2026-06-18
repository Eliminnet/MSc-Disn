import { socket } from "@/ws/socket";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useRoomUsers(roomId: string) {
	const location = useLocation();
	const [users, setUsers] = useState<number>(location.state?.users ?? 1);

	useEffect(() => {
		const handler = (data: { users: number }) => {
			setUsers(data.users);
		};

		socket.on("roomUsers", handler);

		return () => {
			socket.off("roomUsers", handler);
		};
	}, [roomId]);

	return { users };
}
