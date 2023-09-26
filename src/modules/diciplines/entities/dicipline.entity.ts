import { Base } from 'src/modules/base/entities/base.entity';
import { Lesson } from 'src/modules/lesson/entities/lesson.entity';
import { Student } from 'src/modules/students/entities/student.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';

@Entity()
export class Dicipline extends Base {
  
  @Column()
  name: string;

  @ManyToMany(() => Student, students => students.diciplines,{
    nullable: true,
  })
  @JoinTable()
  students: Student[];

  @OneToMany(() => Lesson, (lesson) => lesson.dicipline)
  lessons: Lesson[];
}
