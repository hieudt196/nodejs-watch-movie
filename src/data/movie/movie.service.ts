import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Movie } from 'src/common';
import { databaseTest } from 'src/database';

import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  // constructor() {} // private readonly repo: Repository<Movie>, // @InjectRepository(Movie)

  create(createMovieDto: any) {
    console.log(createMovieDto);

    return 'This action adds a new movie';
  }

  findAll() {
    console.log(process.env.TYPEORM_TYPE);
    console.log(databaseTest);

    return 'find all';
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
