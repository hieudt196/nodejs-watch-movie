import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiConsumesFromUrl, Public } from 'src/shared';
import { LoginDto, RegisterDto } from './auth.dto';
import { AuthService } from './auth.service';
import { ApiTags, ApiConsumes } from '@nestjs/swagger';

@Public()
@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  @ApiConsumes(ApiConsumesFromUrl)
  async login(@Body() input: LoginDto) {
    return this.authService.login(input);
  }

  @Post('/register')
  @HttpCode(HttpStatus.OK)
  @ApiConsumes(ApiConsumesFromUrl)
  async register(@Body() input: RegisterDto) {
    return this.authService.register(input);
  }
}
