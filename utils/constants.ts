const isServer = typeof window === "undefined"

export const CONSTANTS = {
  HASURA_URL: isServer ? "http://localhost:8080" : "http://localhost:8080",
}
