import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Base } from "../../base/entities/base.entity";
import { Content } from "src/modules/content/entities/content.entity";
import { Dicipline } from "src/modules/diciplines/entities/dicipline.entity";

@Entity()
export class Lesson extends Base {
    @Column()
    description: string;


    @OneToMany(() => Content, (content) => content.lesson)
    contents: Content[];

    @ManyToOne(() => Dicipline)
    dicipline: Dicipline[];

    @Column({ nullable: true })
    diciplineId: string;
}
