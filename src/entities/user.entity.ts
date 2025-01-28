import { Entity, Property } from "@mikro-orm/core";
import { Field, ObjectType, Int } from "type-graphql";
import { UserValidator } from "../contracts/validators/user.validator.js";
import { Base } from "../utils/entities/base.entity.js";

@ObjectType()
@Entity()
export class User extends Base<User> {
    @Field(() => Date)
    @Property({ type: "date", nullable: true })
    banned_at?: Date;

    @Field(() => Date)
    @Property({ type: "date", nullable: true })
    banned_until?: Date;

    @Field(() => Int)
    @Property({ type: 'number', default: 0 })
    rubies: number = 0;

    constructor(body: UserValidator) {
        super(body);
    }
}