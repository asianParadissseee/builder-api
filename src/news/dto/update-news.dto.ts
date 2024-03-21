import { PartialType } from "@nestjs/mapped-types";
import { CreateNewsDto } from "./create-news.dto";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateNewsDto extends PartialType(CreateNewsDto) {
  @ApiProperty({
    description: "URL картинки",
    type: "string"
  })
  backgroundImage: string;
  @ApiProperty({
    description: "Заголовок картинки",
    type: "string"
  })
    title: string;
  @ApiProperty({
    description: "Описание картинки",
    type: "string"
  })
    description: string;
  @ApiProperty({
    description: "Описание на id картинки",
    type: "string",
    required: false
  })
    subDescription?: string;
}
