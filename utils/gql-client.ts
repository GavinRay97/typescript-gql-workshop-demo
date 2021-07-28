import { CONSTANTS } from "./constants"
import { Chain } from "./generated/graphql-zeus"

export const client = Chain(CONSTANTS.HASURA_URL + "/v1/graphql", {
  headers: {
    "X-Hasura-Admin-Secret": process.env.HASURA_ADMIN_SECRET,
  },
})
