import { Injectable } from '@nestjs/common';
import { MovieRepository } from './movie.repository';

@Injectable()
export class MovieService {
  constructor(private readonly repo: MovieRepository) {}

  create(createMovieDto: any) {
    console.log(createMovieDto);

    return 'This action adds a new movie';
  }

  async findAll() {
    return this.repo.getAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: any) {
    console.log(updateMovieDto);

    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
