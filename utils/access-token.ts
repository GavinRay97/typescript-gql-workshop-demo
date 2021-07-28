export function getAccessToken() {
  return typeof window !== "undefined"
    ? window.localStorage.getItem("hasura-access-token")
    : null
}

export function setAccessToken(value) {
  return window.localStorage.setItem("hasura-access-token", value)
}
