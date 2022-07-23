import { Base, URole } from 'src/shared';
import { Column, Entity } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User extends Base {
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  phone: string;

  @Column({ type: 'text', select: false })
  password: string;

  @Column({ type: 'text', nullable: true })
  refreshToken: string;

  @Column({ type: 'enum', default: URole.User, enum: URole })
  role: URole;

  public async hashPassword() {
    return bcrypt.hash(this.password, 12);
  }

  public async comparePassword(passwordCompare: string) {
    return bcrypt.compare(passwordCompare, this.password);
  }
}
