import { socket } from "@/ws/socket";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useRoomSlide(roomId: string) {
	const location = useLocation();
	const [slide, setSlide] = useState<number>(location.state?.slide ?? 0);

	useEffect(() => {
		const handler = (data: { slide: number }) => {
			setSlide(data.slide);
		};

		socket.on("roomSlide", handler);

		return () => {
			socket.off("roomSlide", handler);
		};
	}, [roomId]);

	return { slide };
}
