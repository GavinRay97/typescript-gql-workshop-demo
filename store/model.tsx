import { action, thunk, computed } from "easy-peasy"
import type { Action, Thunk, Computed } from "easy-peasy"

import type * as Schema from "../utils/generated/graphql-zeus"
import { initializeApollo } from "../utils/apollo-client"

const apollo = initializeApollo()

/**
 * =====================
 *  STORE TYPES
 * =====================
 */

type Maybe<T> = T | null

export interface Store {
  // STATE
  notification: {
    show: boolean
    title: string
    message: string
    type: "SUCCESS" | "ERROR"
  }
  // ACTIONS
  setNotification: Action<Store, Store["notification"]>
  // COMPUTED
  // THUNKS
  showSuccessNotification: Thunk<Store, { title: string; message: string }>
  showErrorNotification: Thunk<Store, { title: string; message: string }>
}

/**
 * =====================
 *  STORE MODEL
 * =====================
 */

const model: Store = {
  // STATE
  notification: {
    show: false,
    title: "",
    message: "",
    type: "SUCCESS",
  },
  // COMPUTED
  // ACTIONS
  setNotification: action((state, payload) => {
    state.notification = payload
  }),
  // THUNKS
  showSuccessNotification: thunk((store, payload) => {
    store.setNotification({
      show: true,
      title: payload.title,
      message: payload.message,
      type: "SUCCESS",
    })
  }),
  showErrorNotification: thunk((store, payload) => {
    store.setNotification({
      show: true,
      title: payload.title,
      message: payload.message,
      type: "ERROR",
    })
  }),
}

export default model
