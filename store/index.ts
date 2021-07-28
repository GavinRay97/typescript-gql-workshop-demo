import model, { Store } from "./model"
import { persist, createStore, createTypedHooks } from "easy-peasy"

/**
 * =====================
 *  STORE
 * =====================
 */

export const store = createStore<Store>(
  persist(model, {
    storage: "sessionStorage",
  }),
)

/**
 * =====================
 *  EXPORTS & MISC
 * =====================
 */

const typedHooks = createTypedHooks<Store>()
export const useStoreActions = typedHooks.useStoreActions
export const useStoreDispatch = typedHooks.useStoreDispatch
export const useStoreState = typedHooks.useStoreState
export const useStore = typedHooks.useStore
