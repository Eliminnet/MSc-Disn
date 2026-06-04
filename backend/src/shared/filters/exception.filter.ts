import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Request, Response } from "express";

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
	constructor() {}

	catch(exception: any, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const res = ctx.getResponse<Response>();
		const req = ctx.getRequest<Request>();

		const errorId = randomUUID();
		const status = exception instanceof HttpException ? exception.getStatus() : 500;
		const message =
			exception instanceof HttpException ? exception.message : "Internal server error";

		console.error(message, exception.stack, req.url, errorId);

		res.status(status).json({
			success: false,
			code: status,
			message,
			data: null,
			errorId,
		});
	}
}
