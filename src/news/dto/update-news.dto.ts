import { PartialType } from "@nestjs/mapped-types";
import { CreateNewsDto } from "./create-news.dto";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateNewsDto extends PartialType(CreateNewsDto) {
  @ApiProperty({
    description: "URL картинки",
    type: "string"
  })
  private readonly backgroundImage: string;
  @ApiProperty({
    description: "Заголовок картинки",
    type: "string"
  })
  private readonly title: string;
  @ApiProperty({
    description: "Описание картинки",
    type: "string"
  })
  private readonly description: string;
  @ApiProperty({
    description: "Описание на id картинки",
    type: "string",
    required: false
  })
  private readonly subDescription?: string;
}
