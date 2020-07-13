import {Field, ObjectType} from "type-graphql";


@ObjectType()
export class SubscriptionReturnType {
    @Field()
    message?: string;
}