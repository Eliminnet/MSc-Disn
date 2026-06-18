import { socket } from "./socket";
import type { WSResponse } from "./types";

type Response = WSResponse<{ users: number }>;

export function handleJoin(roomId: string): Promise<Response> {
	return new Promise((resolve) => {
		socket.emit("joinRoom", { roomId }, (res: Response) => {
			resolve(res);
		});
	});
}
