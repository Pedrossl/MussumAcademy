import { Column, Entity, OneToMany } from "typeorm";
import { Base } from "../../base/entities/base.entity";
import { Content } from "src/modules/content/entities/content.entity";

@Entity()
export class Lesson extends Base {
    @Column()
    description: string;


    @OneToMany(() => Content, (content) => content.lesson)
    contents: Content[];
}
