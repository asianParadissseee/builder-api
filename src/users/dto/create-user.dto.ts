import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Почта',
    type: 'string',
  })
  @IsString()
  email: string;
  @ApiProperty({
    description: 'URL картинки',
    type: 'string',
  })
  @IsString()
  fullName: string;
  @ApiProperty({
    description: 'URL картинки',
    type: 'string',
  })
  @IsString()
  phoneNumber: string;

}
