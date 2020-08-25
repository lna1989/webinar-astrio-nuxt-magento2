import * as types from '~/mutation-types'
import storeConfigQuery from '~/apollo/queries/common/getStoreConfig.graphql'

// STATE
export const state = () => ({
  storeConfig: {},
})
// GETTERS
export const getters = {
  storeConfig: (store) => store.storeConfig,
  rootCategoryId: (store) =>
    store.storeConfig && store.storeConfig.root_category_id
      ? store.storeConfig.root_category_id
      : null,
  categoryUrlSuffix: (store) =>
    store.storeConfig && store.storeConfig.category_url_suffix
      ? store.storeConfig.category_url_suffix
      : null,
}
// MUTATIONS - sync (commit)
export const mutations = {
  [types.SET_STORE_CONFIG](state, payload) {
    state.storeConfig = payload
  },
}
// ACTIONS - async (dispatch)
export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('setStoreConfig')
    await Promise.all([dispatch('category/setCategoryTree')])
  },
  async setStoreConfig({ commit }) {
    const gql = this.app.apolloProvider.defaultClient

    try {
      const { data } = await gql.query({
        query: storeConfigQuery,
      })
      if (data && data.storeConfig) {
        commit(types.SET_STORE_CONFIG, data.storeConfig)
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
}
