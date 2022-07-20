import { Base } from 'src/shared';
import { Column, Entity } from 'typeorm';

@Entity()
export class Movie extends Base {
  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  image: string;

  @Column()
  link: string;
}
