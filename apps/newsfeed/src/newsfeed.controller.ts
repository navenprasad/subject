import { Controller, Get } from '@nestjs/common';
import { NewsfeedService } from './newsfeed.service';

@Controller()
export class NewsfeedController {
  constructor(private readonly newsfeedService: NewsfeedService) {}

  @Get()
  getHello(): string {
    return this.newsfeedService.getHello();
  }
}
