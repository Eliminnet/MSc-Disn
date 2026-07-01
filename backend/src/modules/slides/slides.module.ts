import { Module } from "@nestjs/common";
import { SlidesController } from "./slides.controller";
import { SlidesService } from "./slides.service";

@Module({
    imports: [],
    controllers: [SlidesController],
    providers: [SlidesService],
    exports: [],
})
export class SlidesModule {}