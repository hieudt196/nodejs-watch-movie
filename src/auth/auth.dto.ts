import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username?: string;

  @IsNotEmpty()
  @ApiProperty()
  @Length(6)
  password: string;
}

export class RegisterDto {
  @IsString()
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ required: false })
  phone?: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(6)
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(6)
  confirmPassword: string;
}
