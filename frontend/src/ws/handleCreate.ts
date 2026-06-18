import { socket } from "./socket";
import type { WSResponse } from "./types";

type Response = WSResponse<{ roomId: string }>;

export function handleCreate(): Promise<Response> {
	return new Promise((resolve) => {
		socket.emit("createRoom", (res: Response) => {
			resolve(res);
		});
	});
}
