import { Controller, Post } from "@nestjs/common";

@Controller()
export class SlidesController {
    constructor() {}

    @Post("/")
    slides() {
        return
    }
}