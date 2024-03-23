import { PartialType } from '@nestjs/mapped-types';
import { CreateNewsDto } from './create-news.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateNewsDto extends PartialType(CreateNewsDto) {
  @ApiProperty({
    description: 'URL картинки',
    type: 'string',
  })
  @IsString()
  backgroundImage: string;
  @ApiProperty({
    description: 'Заголовок картинки',
    type: 'string',
  })
  @IsString()
  title: string;
  @ApiProperty({
    description: 'Описание картинки',
    type: 'string',
  })
  @IsString()
  description: string;
  @ApiProperty({
    description: 'Описание на id картинки',
    type: 'string',
    required: false,
  })
  @IsString()
  subDescription?: string;
}
