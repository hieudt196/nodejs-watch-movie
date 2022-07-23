import { Base } from 'src/shared';
import { Column, Entity } from 'typeorm';

@Entity()
export class Movie extends Base {
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  category: string;

  @Column({ type: 'text' })
  image: string;

  @Column({ type: 'text' })
  link: string;
}
