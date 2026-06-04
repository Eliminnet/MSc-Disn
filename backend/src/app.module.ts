import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RoomsModule } from "./modules/room/rooms.module";
import { EventsGateway } from "./events/events.gateway";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		RoomsModule,
	],
	controllers: [],
	providers: [EventsGateway],
	exports: [],
})
export class AppModule {}
