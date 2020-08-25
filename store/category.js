import * as types from '~/mutation-types'
import categoryThreeQuery from '~/apollo/queries/category/getCategoryThree.graphql'

// STATE
export const state = () => ({
  tree: [],
})
// GETTERS
export const getters = {
  tree: (state) => state.tree,
}
// MUTATION - sync (commit)
export const mutations = {
  [types.SET_CATEGORY_TREE](state, payload) {
    state.tree = payload
  },
}
// ACTION - async (dispatch)
export const actions = {
  async setCategoryTree({ commit, dispatch, state, rootGetters }) {
    const gql = this.app.apolloProvider.defaultClient

    try {
      const { data } = await gql.query({
        query: categoryThreeQuery,
        variables: {
          filters: {
            ids: {
              in: [rootGetters.rootCategoryId],
            },
          },
        },
      })
      if (
        data &&
        Array.isArray(data.categoryList) &&
        data.categoryList[0].children
      ) {
        return commit(types.SET_CATEGORY_TREE, data.categoryList[0].children)
      }
      throw new Error('Все плохо')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
}
