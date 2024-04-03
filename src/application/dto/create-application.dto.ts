import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateApplicationDto {

  @ApiProperty({
    description: 'Имя пользователя от заявки',
    type: 'string',
  })
  @IsString()
  fullName: string;
  @ApiProperty({
    description: 'Номер телефона пользователя от заявки',
    type: 'string',
  })
  @IsString()
  phoneNumber: string;
}
