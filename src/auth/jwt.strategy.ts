import { BadRequestException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SESSION_KEY,
      algorithm: 'HS512',
    });
  }

  async validate(payload: { id: string }): Promise<{
    id: string;
    name: string;
    email: string;
    phone: string;
    role: string;
  }> {
    const account = await this.authService.findOne(payload.id);
    if (!account) {
      throw new BadRequestException('Account not allowed');
    }

    return {
      id: account.id,
      name: account.name,
      email: account.email,
      phone: account.phone,
      role: account.role,
    };
  }
}
