import { Injectable } from "@nestjs/common";
import { CreateNewsDto } from "./dto/create-news.dto";
import { UpdateNewsDto } from "./dto/update-news.dto";
import { InjectModel } from "@nestjs/mongoose";
import { News } from "./entities/news.entity";
import { Model } from "mongoose";


@Injectable()
export class NewsService {
  constructor(@InjectModel(News.name) private newsModel: Model<News>) {
  }

  create(createNewsDto: CreateNewsDto) {
    const news = new this.newsModel(createNewsDto);
    return news.save();
  }

  async findAll() {
    return await this.newsModel.find();
  }

  findOne(id: number) {
    return this.newsModel.findOne({id: id});
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    return `This action updates a #${id} news`;
  }

  remove(id: number) {
    return `This action removes a #${id} news`;
  }
}
