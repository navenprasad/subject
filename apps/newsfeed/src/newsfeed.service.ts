import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsfeedService {
  getHello(): string {
    return 'Hello World!';
  }
}
