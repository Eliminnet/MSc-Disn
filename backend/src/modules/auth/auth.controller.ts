import { Body, Controller, Get, Post, Req, Res, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import type { Request } from "express";

const users = [
	{ username: "admin", password: "admin" },
	{ username: "nathan", password: "nathan" },
	{ username: "lecturer", password: "1234" },
];

@Controller("/auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post("/login")
	postLogin(@Body() body: { username: string; password: string }, @Req() req: Request) {
		const { username, password } = body;
		const user = users.find((u) => u.username === username && u.password === password);

		if (!user) {
			throw new UnauthorizedException();
		}

		req.session.user = true;
	}

	@Get("/me")
	getSelf(@Req() req: Request) {
		if (!req.session.user) {
			throw new UnauthorizedException();
		}
	}
}
