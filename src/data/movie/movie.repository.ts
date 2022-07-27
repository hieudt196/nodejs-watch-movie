import { dataSource } from 'src/database';
import { Movie } from './movie.entity';

const db = dataSource.getRepository(Movie);

export class MovieRepository {
  async getAll(): Promise<Movie[]> {
    return db.find();
  }
}
