import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email?: string;

  @IsString()
  phone?: string;

  @IsNotEmpty()
  @Length(6)
  password: string;
}

export class RegisterDto {
  @IsString()
  name: string;

  @IsEmail()
  email?: string;

  @IsString()
  phone?: string;

  @IsNotEmpty()
  @Length(6)
  password: string;
  @IsNotEmpty()
  @Length(6)
  confirmPassword: string;
}
