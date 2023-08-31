import { Test, TestingModule } from '@nestjs/testing';
import { NewsfeedController } from './newsfeed.controller';
import { NewsfeedService } from './newsfeed.service';

describe('NewsfeedController', () => {
  let newsfeedController: NewsfeedController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NewsfeedController],
      providers: [NewsfeedService],
    }).compile();

    newsfeedController = app.get<NewsfeedController>(NewsfeedController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(newsfeedController.getHello()).toBe('Hello World!');
    });
  });
});
