import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/app.module";
import { ResponseInterceptor } from "@/shared/interceptors/response.interceptor";
import { GlobalExceptionFilter } from "@/shared/filters/exception.filter";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalInterceptors(new ResponseInterceptor());
	app.useGlobalFilters(new GlobalExceptionFilter());

	app.enableCors({
		origin: ["http://localhost:5173", "http://192.168.50.164"],
		credentials: true,
	});

	await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
