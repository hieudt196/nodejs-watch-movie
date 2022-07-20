import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Base {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column({ type: 'boolean', nullable: false, default: false })
  is_delete: boolean;
}
