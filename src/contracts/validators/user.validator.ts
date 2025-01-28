import { IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class UserValidator {
    @Field(() => String)
    @IsString()
    username!: string;

    @Field(() => String)
    @IsString()
    nickname!: string;

    @Field(() => String)
    @IsString()
    picture!: string;

    @Field(() => String)
    @IsString()
    wallet_address!: string;
}