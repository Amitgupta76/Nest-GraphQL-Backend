import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
export class Message {
    @Field((type) => Int)
    id: number;

    @Field()
    conversation: string;
}