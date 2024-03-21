import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from 'class-validator';

export class CreateNewsDto {
  @ApiProperty({
    description: 'URL картинки',
    type: 'string',
  })
  @IsOptional()
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
  })
    subDescription?: string;
}
