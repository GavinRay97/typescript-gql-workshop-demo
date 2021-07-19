import {
  gql,
  useMutation,
  useQuery,
  useSubscription,
  useLazyQuery,
} from "@apollo/client"

import type {
  LazyQueryHookOptions,
  MutationHookOptions,
  QueryHookOptions,
  SubscriptionHookOptions,
  NormalizedCacheObject,
  QueryOptions,
  ApolloClient,
  MutationOptions,
  SubscriptionOptions,
} from "@apollo/client"

import { Zeus } from "./generated/zeus/index"
import type { MapType, ValueTypes } from "./generated/zeus/index"


type QueryRoot = ValueTypes["query_root"]
type MutationRoot = ValueTypes["mutation_root"]
type SubscriptionRoot = ValueTypes["subscription_root"]

export function useTypedQuery<Query extends QueryRoot>(
  query: Query,
  options?: QueryHookOptions<MapType<QueryRoot, Query>, Record<string, any>>,
) {
  return useQuery<MapType<QueryRoot, Query>>(gql(Zeus.query(query)), options)
}

export function useTypedLazyQuery<Query extends QueryRoot>(
  query: Query,
  options?: LazyQueryHookOptions<
    MapType<QueryRoot, Query>,
    Record<string, any>
  >,
) {
  return useLazyQuery<MapType<QueryRoot, Query>>(
    gql(Zeus.query(query)),
    options,
  )
}

export function useTypedMutation<Mutation extends MutationRoot>(
  mutation: Mutation,
  options?: MutationHookOptions<
    MapType<MutationRoot, Mutation>,
    Record<string, any>
  >,
) {
  return useMutation<MapType<MutationRoot, Mutation>>(
    gql(Zeus.mutation(mutation)),
    options,
  )
}

export function useTypedSubscription<Subscription extends SubscriptionRoot>(
  subscription: Subscription,
  options?: SubscriptionHookOptions<
    MapType<SubscriptionRoot, Subscription>,
    Record<string, any>
  >,
) {
  return useSubscription<MapType<SubscriptionRoot, Subscription>>(
    gql(Zeus.subscription(subscription)),
    options,
  )
}

///////////////////////////////////////////////
// These functions allow to use the Apollo client
// instance currently constructed/available in-context
// for making type-inferenced queries

export function useTypedClientQuery<Query extends QueryRoot>(
  apollo: ApolloClient<NormalizedCacheObject>,
  query: Query,
  options?: QueryOptions<MapType<QueryRoot, Query>, Record<string, any>>,
) {
  return apollo.query<MapType<QueryRoot, Query>>({
    query: gql(Zeus.query(query)),
    ...options,
  })
}

export function useTypedClientMutation<Mutation extends MutationRoot>(
  apollo: ApolloClient<NormalizedCacheObject>,
  mutation: Mutation,
  options?: MutationOptions<
    MapType<MutationRoot, Mutation>,
    Record<string, any>
  >,
) {
  return apollo.mutate<MapType<MutationRoot, Mutation>>({
    mutation: gql(Zeus.mutation(mutation)),
    ...options,
  })
}

export function useTypedClientSubscription<
  Subscription extends SubscriptionRoot,
>(
  apollo: ApolloClient<NormalizedCacheObject>,
  subscription: Subscription,
  options?: SubscriptionOptions<
    MapType<SubscriptionRoot, Subscription>,
    Record<string, any>
  >,
) {
  return apollo.subscribe<MapType<SubscriptionRoot, Subscription>>({
    query: gql(Zeus.subscription(subscription)),
    ...options,
  })
}
