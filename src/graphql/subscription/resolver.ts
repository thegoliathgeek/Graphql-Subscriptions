import {Ctx, Query, Resolver} from "type-graphql";


@Resolver()
export default class SubscriptionResolver {

    @Query(returns => String)
    async hello(@Ctx() ctx: any) {
        return "Hello World"
    }
}