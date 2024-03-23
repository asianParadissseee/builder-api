import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateArticleDto {
  @ApiProperty({
    description: 'URL картинки',
    type: 'string',
  })
  @IsString()
  backgroundImage: string;
  @ApiProperty({
    description: 'Заголовок статьи',
    type: 'string',
  })
  @IsString()
  title: string;
  @ApiProperty({
    description: 'Подзаголовок статьи',
    type: 'string',
  })
  @IsString()
  subTitle: string;
  @ApiProperty({
    description: 'Полное описание статьи',
    type: 'string',
  })
  @IsString()
  description: string
}
