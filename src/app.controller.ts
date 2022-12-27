import { Controller } from '@nestjs/common';
import { Get } from "@nestjs/common/decorators";

@Controller()
export class AppController {
  @Get()
  home(): string{
    return 'Welcome to my Movie API';
  }
}
