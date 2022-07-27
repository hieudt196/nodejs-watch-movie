import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Movie } from './movie.entity';

@Injectable()
export class MovieRepository extends Repository<Movie> {
  constructor(private data: DataSource) {
    super(Movie, data.createEntityManager());
  }
  async getAll(): Promise<Movie[]> {
    return this.find();
  }
}
