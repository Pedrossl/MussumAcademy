import { Column, Entity } from "typeorm";
import { Base } from "../../base/entities/base.entity";

@Entity()
export class Lesson extends Base {
@Column()
description: string;
}
