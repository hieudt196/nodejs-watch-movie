import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { LoginDto, RegisterDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() input: LoginDto) {
    return this.authService.validate(input);
  }
  @Post('/register')
  @HttpCode(HttpStatus.OK)
  async register(@Body() input: RegisterDto) {
    return this.authService.register(input);
  }
}
