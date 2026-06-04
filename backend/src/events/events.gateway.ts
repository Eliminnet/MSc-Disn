import {
	ConnectedSocket,
	MessageBody,
	SubscribeMessage,
	WebSocketGateway,
	WebSocketServer,
} from "@nestjs/websockets";

import { Server, Socket } from "socket.io";

type RoomPayload = {
	id: string;
	user: string;
};

@WebSocketGateway({
	cors: {
		origin: "*",
	},
})
export class EventsGateway {
	@WebSocketServer()
	server!: Server;

	private users = new Map<string, Partial<RoomPayload>>();

	handleConnect(client: Socket) {
		console.log(`Client connected: ${client.id}`);

		this.users.set(client.id, {});
	}

	handleDisconnect(client: Socket) {
		console.log(`Client disconnected: ${client.id}`);

		const data = this.users.get(client.id);

		if (data?.id) {
			this.server.to(data.id).emit("userLeft", {
				user: data.user,
			});
		}

		this.users.delete(client.id);
	}

	@SubscribeMessage("joinRoom")
	handleJoinRoom(@MessageBody() payload: RoomPayload, @ConnectedSocket() client: Socket) {
		const { id, user } = payload;

		client.join(id);

		this.users.set(client.id, { id, user });
		client.to(id).emit("userJoined", {
			user,
		});

		return {
			event: "joinedRoom",
			data: { id },
		};
	}
}
