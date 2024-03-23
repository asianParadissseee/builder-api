import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { InjectModel } from '@nestjs/mongoose';
import { News } from './entities/news.entity';
import { Model } from 'mongoose';


@Injectable()
export class NewsService {
  constructor(@InjectModel(News.name) private newsModel: Model<News>) {
  }

  async create(createNewsDto: CreateNewsDto) {
    try {
      return await new this.newsModel(createNewsDto).save();
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(`Ошибка создания новости ${e}`);
    }
  }

  async findAll() {
    try {
      return await this.newsModel.find();
    } catch (e) {
      throw new InternalServerErrorException(`Ошибка получение всех новостей ${e}`);
    }
  }

  async findOne(id: string) {
    try {
      return await this.newsModel.findById(id);
    } catch (e) {
      throw new NotFoundException(`Ошибка получение новости с ${id}, либо новость с таким ${id} не найдено`);
    }
  }

  async update(id: number, updateNewsDto: UpdateNewsDto) {
    try {
      // return await  this.newsModel.updateOne(id, updateNewsDto)
    } catch (e) {

    }
  }

  async remove(id: number) {
    try {
      return await this.newsModel.deleteOne({ id });
    } catch (e) {

    }
  }
}
