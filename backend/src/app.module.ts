import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { EventsGateway } from "./events/events.gateway";
import { AuthModule } from "./modules/auth/auth.module";
import { SlidesModule } from "./modules/slides/slides.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		AuthModule,
		SlidesModule,
	],
	controllers: [],
	providers: [EventsGateway],
	exports: [],
})
export class AppModule {}
