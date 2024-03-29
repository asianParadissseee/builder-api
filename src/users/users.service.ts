import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private usersModel: Model<User>) {

  }


  async create(createUserDto: CreateUserDto) {
    try {
      return await new this.usersModel(createUserDto).save();
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(`Ошибка создания юзера ${e}`);
    }
  }


  async findAll() {
    try {
      return await this.usersModel.find();
    } catch (e) {
      throw new InternalServerErrorException(`Ошибка получение всех юзеров ${e}`);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
