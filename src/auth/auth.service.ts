import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/common';
import { Repository } from 'typeorm';
import { LoginDto, RegisterDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async findOne(condition: any): Promise<User> {
    return this.userRepository.findOne({ where: condition });
  }

  async validate(input: LoginDto) {
    const { email, phone, password } = input;
    const filter = !!email ? { email } : { phone };
    const user = await this.userRepository.findOne({
      where: filter,
      select: ['email', 'phone', 'password', 'role'],
    });

    if (!user || user == null) {
      throw new BadRequestException('Account not found');
    }

    if (!!user && (await user.comparePassword(password))) {
      const { password, ...result } = user;
      return result;
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
