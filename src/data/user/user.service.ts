import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  ACCOUNT_NOT_FOUND,
  EMAIL_EXISTS,
  PASSWORD_NOT_SAME,
  PHONE_EXISTS,
} from 'src/shared';
import { AddUserDto, UpdateUserDto } from './user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private repo: UserRepository) {}

  async addUser(createUserDto: AddUserDto): Promise<User> {
    const newUser = this.repo.create(createUserDto);
    newUser.password = await newUser.hashPassword();
    return this.repo.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return this.repo.find({ where: { is_deleted: false } });
  }

  async findOne(id: string): Promise<User> {
    return this.repo.findOneBy({ id: id, is_deleted: false });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException(ACCOUNT_NOT_FOUND);
    }
    const filter = {};

    if (!!updateUserDto.email && updateUserDto.email != user.email) {
      filter['email'] = updateUserDto.email;
    }
    if (!!updateUserDto.phone && updateUserDto.phone != user.phone) {
      filter['phone'] = updateUserDto.phone;
    }

    await this.checkDto(filter);
    await this.repo.update({ id: id }, updateUserDto);
    return this.findOne(id);
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }

  async checkDto(dto: CheckDto): Promise<void> {
    if (!!dto.email) {
      const existsUser = await this.repo.findOneBy({
        email: dto.email,
      });

      if (!!existsUser) {
        throw new BadRequestException(EMAIL_EXISTS);
      }
    }

    if (!!dto.phone) {
      const existsUser = await this.repo.findOneBy({
        phone: dto.phone,
      });

      if (!!existsUser) {
        throw new BadRequestException(PHONE_EXISTS);
      }
    }

    if (
      !!dto.password &&
      !!dto.confirmPassword &&
      dto.password != dto.confirmPassword
    ) {
      throw new BadRequestException(PASSWORD_NOT_SAME);
    }
  }
}

interface CheckDto {
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}
