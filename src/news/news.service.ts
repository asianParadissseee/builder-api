import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { InjectModel } from '@nestjs/mongoose';
import { News } from './entities/news.entity';
import mongoose, { Model } from 'mongoose';


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
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException(`Не валидный id.Ошибка получение новости с ${id}, либо новость с таким ${id} не найдено`);
    try {
      return await this.newsModel.findById(id);
    } catch (e) {
      throw new NotFoundException(`Ошибка получение новости с ${id}, либо новость с таким ${id} не найдено`);
    }
  }

  async update(id: string, updateNewsDto: UpdateNewsDto) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new BadRequestException(`Не валидный id.Ошибка получение новости с ${id}, либо новость с таким ${id} не найдено`);
    try {
      return await this.newsModel.findByIdAndUpdate(id, updateNewsDto);
    } catch (e) {
      throw new BadRequestException(`Ошибка изменения новости с ${id}, либо новость с таким ${id} не найдено`);
    }
  }

  async remove(id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new BadRequestException(`Не валидный id.Ошибка удаление новости с ${id}, либо новость с таким ${id} не найдено`);
    try {
      return await this.newsModel.findByIdAndDelete(id);
    } catch (e) {
      throw new BadRequestException(`Ошибка удаления новости с ${id}, либо новость с таким ${id} не найдено`);
    }
  }
}
