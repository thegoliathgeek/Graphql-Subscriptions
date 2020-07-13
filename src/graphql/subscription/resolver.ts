import {Ctx, Query, Resolver, Subscription} from "type-graphql";


@Resolver()
export default class SubscriptionResolver {

    @Query(returns => String)
    async hello(@Ctx() ctx: any) {
        await ctx.req.pubsub.publish('MESSAGES');
        return "Hello World"
    }

    @Subscription(() => String, {
        topics: "MESSAGES"
    })
    async subscription(@Ctx() ctx: any): Promise<any> {
        return "something";
    }
}