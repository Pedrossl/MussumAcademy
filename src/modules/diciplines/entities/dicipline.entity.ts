import { Base } from 'src/modules/base/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Dicipline extends Base {
  
  @Column()
  name: string;

}
