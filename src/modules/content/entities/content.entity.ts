import { Base } from 'src/modules/base/entities/base.entity';
import { Lesson } from 'src/modules/lesson/entities/lesson.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Content extends Base {
  @Column()
  description: string;

  @Column({ nullable: true})
  linkContent: string;

  @ManyToOne(() => Lesson, lesson => lesson.contents)
  lesson: Lesson;

  @Column({nullable: true})
  lessonId?: string;

}