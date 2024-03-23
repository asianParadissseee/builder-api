import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './entities/article.entity';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class ArticlesService {
  constructor(@InjectModel(Article.name) private articleModel: Model<Article> ) {
  }

  async create(createArticleDto: CreateArticleDto) {
    try {
      return await new this.articleModel(createArticleDto).save()
    }catch (e) {
      console.log(e);
      throw new InternalServerErrorException(`Ошибка создания статьи ${e}`);
    }
  }

  async findAll() {
      try {
        return await this.articleModel.find()
      }catch (e) {
        throw new InternalServerErrorException(`Ошибка получение всех статей ${e}`);
      }
  }

  async findOne(id: string) {
      const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException(`Не валидный id.Ошибка получение новости с ${id}, либо новость с таким ${id} не найдено`);

    try {
      return await this.articleModel.findById(id)
    }catch (e) {
      if (!isValid) throw new NotFoundException(`Ошибка получение новости с ${id}, либо новость с таким ${id} не найдено`);
    }
  }

 async update(id: string, updateArticleDto: UpdateArticleDto) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException(`Не валидный id.Ошибка изменения статьи с ${id}, либо новость с таким ${id} не найдено`);
    try {
      return await this.articleModel.findByIdAndUpdate(id)
    }catch (e) {
      throw new BadRequestException(`Ошибка изменения статьи с ${id}, либо новость с таким ${id} не найдено`);
    }
  }

 async remove(id: string) {
   const isValid = mongoose.Types.ObjectId.isValid(id);
   if (!isValid) throw new NotFoundException(`Не валидный id.Ошибка удаления статьи  с ${id}, либо новость с таким ${id} не найдено`);
   try {
      return await this.articleModel.findByIdAndDelete(id)
    }catch (e) {
     throw new BadRequestException(`Ошибка удаления статьи с ${id}, либо новость с таким ${id} не найдено`);
   }
  }
}
