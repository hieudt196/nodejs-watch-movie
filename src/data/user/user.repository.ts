import { User } from './user.entity';
import { dataSource } from 'src/database';

const db = dataSource.getRepository(User);

export class UserRepository {
  async getAll() {
    return db.find();
  }
}
