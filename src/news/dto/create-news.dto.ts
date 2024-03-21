import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateNewsDto {
  @ApiProperty({
    description: 'URL картинки',
    type: 'string',
  })
  @IsString()
  private readonly backgroundImage: string;
  @ApiProperty({
    description: 'Заголовок картинки',
    type: 'string',
  })
  @IsString()
  private readonly title: string;
  @ApiProperty({
    description: 'Описание картинки',
    type: 'string',
  })
  @IsString()
  private readonly description: string;
  @ApiProperty({
    description: 'Описание на id картинки',
    type: 'string',
  })
  private readonly subDescription?: string;
}
