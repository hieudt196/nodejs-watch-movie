import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from './jwt.strategy';
import { SharedModule } from 'src/shared';
import { User } from 'src/data';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    SharedModule,
    JwtModule.register({
      secret: process.env.SESSION_KEY,
      signOptions: { algorithm: 'HS512' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
