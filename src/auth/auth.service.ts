import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/common';
import { Repository } from 'typeorm';
import { LoginDto, RegisterDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    private jwtService: JwtService,
  ) {}
  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id, is_deleted: false } });
  }

  async login(input: LoginDto) {
    let user = await this.userRepository.findOne({
      where: { email: input.username, is_deleted: false },
      select: ['email', 'phone', 'password', 'role'],
    });

    if (!user)
      user = await this.userRepository.findOne({
        where: { phone: input.username, is_deleted: false },
        select: ['email', 'phone', 'password', 'role'],
      });

    if (!!user && (await user.comparePassword(input.password))) {
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      };
      return this.jwtService.sign(payload, {
        secret: process.env.SESSION_KEY,
        expiresIn: '1d',
      });
    }

    throw new BadRequestException('Account not found');
  }

  async register(input: RegisterDto) {
    const { email, phone, password, confirmPassword } = input;

    if (!!email) {
      const user = await this.userRepository.findOne({ where: { email } });

      if (!!user) throw new BadRequestException('Email already exist');
    }

    if (!!phone) {
      const user = await this.userRepository.findOne({ where: { phone } });
      if (!!user) throw new BadRequestException('Phone already exist');
    }

    if (password != confirmPassword) {
      throw new BadRequestException('Password are not the same');
    }

    const newUser = this.userRepository.create({ ...input });
    newUser.password = await newUser.hashPassword();

    return this.userRepository.save(newUser);
  }
}
