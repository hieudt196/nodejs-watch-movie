import { User } from './user.entity';
import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private data: DataSource) {
    super(User, data.createEntityManager());
  }
  async getAll() {
    return this.find();
  }
}
