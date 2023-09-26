import { Base } from 'src/modules/base/entities/base.entity';
import { Dicipline } from 'src/modules/diciplines/entities/dicipline.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity()
export class Student extends Base {
  @Column()
  name: string;

  @Column()
  key: string;


  @ManyToMany(() => Dicipline, diciplines => diciplines.students,{
    nullable: true,
  })
  diciplines: Dicipline[];
}