import { generateCode } from "@/shared/generateCode";
import { Injectable } from "@nestjs/common";

@Injectable()
export class RoomsService {
	private rooms: Map<string, Set<string>> = new Map();

	async createRoom() {
		const roomId = generateCode();
		this.rooms.set(roomId, new Set());
		return roomId;
	}
}
