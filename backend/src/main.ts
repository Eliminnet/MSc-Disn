import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/app.module";
import { ResponseInterceptor } from "@/shared/interceptors/response.interceptor";
import { GlobalExceptionFilter } from "@/shared/filters/exception.filter";
import type { Request, Response } from "express";
import { createSessionMiddleware } from "./session.config";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.use(createSessionMiddleware());

	app.useGlobalInterceptors(new ResponseInterceptor());
	app.useGlobalFilters(new GlobalExceptionFilter());

	app.use((req: Request, res: Response, next) => {
		if (req.url === "/favicon.ico") {
			return res.status(204).end();
		}
		next();
	});

	app.enableCors({
		origin: ["http://localhost:5173", "http://192.168.50.164", "*"],
		credentials: true,
	});

	await app.listen(process.env.PORT ?? 3000, "0.0.0.0");
}
bootstrap();
