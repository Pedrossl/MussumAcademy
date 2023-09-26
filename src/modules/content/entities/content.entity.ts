import { Base } from 'src/modules/base/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Content extends Base {
  @Column()
  description: string;

  @Column({ nullable: true})
  linkContent: string;
}