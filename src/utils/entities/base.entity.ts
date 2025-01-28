import { BaseEntity, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Base<T extends { id: number }> extends BaseEntity {
    @Field(() => ID)
    @PrimaryKey()
    id!: number;

    @Field(() => Date)
    @Property({ type: "date", onUpdate: () => new Date() })
    created_at!: Date;

    @Field(() => Date)
    @Property({ type: "date", onUpdate: () => new Date(), nullable: true })
    updated_at?: Date;

    @Field(() => Date)
    @Property({ type: "date", nullable: true })
    deleted_at?: Date;

    constructor(body = {}) {
        super();
        this.assign(body);
    }
}