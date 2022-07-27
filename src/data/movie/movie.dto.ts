import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class MovieDto {
  @IsString()
  @ApiProperty({ type: 'string' })
  name: string;

  @IsString()
  @ApiProperty({ type: 'string' })
  category: string;

  @IsString()
  @ApiProperty({ type: 'string' })
  image: string;

  @IsString()
  @ApiProperty({ type: 'string' })
  link: string;
}
