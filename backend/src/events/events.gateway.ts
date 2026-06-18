import {
	ConnectedSocket,
	MessageBody,
	SubscribeMessage,
	WebSocketGateway,
	WebSocketServer,
} from "@nestjs/websockets";

import { Server, Socket } from "socket.io";
import type { RoomState, WSResponse } from "./types";
import { generateCode } from "@/shared/generateCode";
import { createSessionMiddleware } from "@/session.config";

@WebSocketGateway({
	cors: {
		origin: "*",
	},
})
export class EventsGateway {
	@WebSocketServer()
	server!: Server;

	private rooms: Map<string, RoomState> = new Map();

	afterInit(server: Server) {
		const sessionMiddleware = createSessionMiddleware();

		server.engine.use((req, res, next) => {
			sessionMiddleware(req as any, res as any, next as any);
		});
	}

	handleConnection(client: Socket) {
		console.log(`Client connected: ${client.id}`);
	}

	handleDisconnect(client: Socket) {
		console.log(`Client disconnected: ${client.id}`);

		for (const [roomId, room] of this.rooms.entries()) {
			room.socketIds.delete(client.id);

			if (room.hostId === client.id || room.socketIds.size === 0) {
				this.server.in(roomId).socketsLeave(roomId);
				this.rooms.delete(roomId);
				continue;
			}

			this.server.to(roomId).emit("roomUsers", {
				users: room.socketIds.size,
			});
		}
	}

	@SubscribeMessage("createRoom")
	handleCreateRoom(@ConnectedSocket() client: Socket): WSResponse<{roomId: string}> {
		let roomId = generateCode();
		while (this.rooms.has(roomId)) {
			roomId = generateCode()
		}
		client.join(roomId);

		this.rooms.set(roomId, {
			hostId: client.id,
			slide: 0,
			socketIds: new Set([client.id]),
		});

		console.log(`Created room ${roomId}`);
		console.log(this.rooms.get(roomId));

		return { ok: true, roomId };
	}

	@SubscribeMessage("joinRoom")
	handleJoinRoom(@MessageBody() payload: { roomId: string }, @ConnectedSocket() client: Socket): WSResponse<{users: number, slide: number}> {
		const { roomId } = payload;
		const room = this.rooms.get(roomId);

		console.log(roomId);
		console.log(this.rooms.keys());

		if (!room) {
			return { ok: false, error: "Room does not exist" };
		}

		if (room.socketIds.has(client.id)) {
			return { ok: true, users: room.socketIds.size, slide: room.slide };
		}

		client.join(roomId);
		room.socketIds.add(client.id);

		console.log(`User ${client.id} joined room ${roomId}`);
		console.log(this.rooms.get(roomId));

		this.server.to(roomId).emit("roomUsers", {
			users: room.socketIds.size,
		});

		return { ok: true, users: room.socketIds.size, slide: room.slide };
	}
}
