import { Column, Entity } from 'typeorm';
import { Base } from '../../shared/base.entity';

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
