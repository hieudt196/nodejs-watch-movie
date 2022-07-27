import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, Length } from 'class-validator';
import { URole } from 'src/shared';

export class AddUserDto {
  @IsString()
  @ApiProperty({ type: 'string' })
  name: string;

  @IsOptional()
  @ApiProperty({ type: 'email', required: false })
  @IsEmail()
  email?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: 'string', required: false })
  phone: string;

  @IsString()
  @Length(6)
  @ApiProperty({ type: 'password', minLength: 6 })
  password: string;

  @ApiProperty({
    type: 'enum',
    enum: URole,
    default: URole.User,
  })
  role: URole;
}

export class UpdateUserDto {
  @IsString()
  @ApiProperty({ type: 'string', required: false })
  name?: string;

  @IsOptional()
  @ApiProperty({ type: 'email', required: false })
  @IsEmail()
  email?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: 'string', required: false })
  phone?: string;

  @ApiProperty({
    type: 'enum',
    enum: URole,
    default: URole.User,
    required: false,
  })
  role?: URole;
}

export class UserDto {
  @IsString()
  @ApiProperty({ type: 'string', required: false })
  name?: string;

  @IsOptional()
  @ApiProperty({ type: 'email', required: false })
  @IsEmail()
  email?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: 'string', required: false })
  phone?: string;

  @IsString()
  @Length(6)
  @ApiProperty({ type: 'password', minLength: 6, required: false })
  password?: string;

  @IsString()
  @Length(6)
  @ApiProperty({ type: 'password', minLength: 6, required: false })
  confirmPassword?: string;

  @ApiProperty({
    type: 'enum',
    enum: URole,
    default: URole.User,
    required: false,
  })
  role?: URole;
}
