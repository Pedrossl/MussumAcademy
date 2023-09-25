import { Column, Entity } from "typeorm";

@Entity()
export class Lesson {
@Column()
description: string;
}
