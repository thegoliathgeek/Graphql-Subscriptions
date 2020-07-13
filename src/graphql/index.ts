import SubscriptionResolver from "./subscription/resolver";
import {NonEmptyArray} from "type-graphql/dist/interfaces/NonEmptyArray";

export const Resolvers: NonEmptyArray<Function> | any = () => [SubscriptionResolver]