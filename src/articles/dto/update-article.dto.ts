import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateArticleDto } from './create-article.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
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
