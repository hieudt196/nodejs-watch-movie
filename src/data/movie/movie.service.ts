import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
  // constructor() {} // private readonly repo: Repository<Movie>, // @InjectRepository(Movie)

  create(createMovieDto: any) {
    console.log(createMovieDto);

    return 'This action adds a new movie';
  }

  findAll() {
    // console.log(process.env.TYPEORM_TYPE);
    // console.log(databaseTest);
    // console.log(env);
    console.log(process.env.TYPEORM_HOST);
    console.log(process.env.TYPEORM_PORT);
    console.log(process.env.TYPEORM_USERNAME);
    console.log(process.env.TYPEORM_PASSWORD);

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
