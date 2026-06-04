import { Controller, Get, Post, Query } from "@nestjs/common";
import { RoomsService } from "./rooms.service";

@Controller("rooms")
export class RoomsController {
	constructor(private readonly roomsService: RoomsService) {}

	@Post("/create")
	async createRoom() {
		const data = this.roomsService.createRoom();
		return data;
	}

	@Post("/:id/join")
	async joinRoom(@Query("id") id: string) {}

	@Get("/:id")
	async getRoom(@Query("id") id: string) {}
}
