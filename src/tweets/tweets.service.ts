import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { Tweet } from './entities/tweet.entity';

@Injectable()
export class TweetsService {
  constructor(
    @InjectModel(Tweet)
    private tweetModel: typeof Tweet
  ){}

  create(createTweetDto: CreateTweetDto) {
    return 'This action adds a new tweet';
  }

  async findAll(): Promise<Tweet[]> {
    return this.tweetModel.findAll();
  }

  findOne(id: number): Promise<Tweet> {
    return this.tweetModel.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return `This action updates a #${id} tweet`;
  }

  async remove(id: number): Promise<void> {
    const tweet = await this.findOne(id);
    await tweet.destroy();
  }
}
