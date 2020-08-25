<template>
  <component :is="type" :id="id"></component>
</template>

<script>
export default {
  components: {
    category: () => ({
      component: import('@/components/Category'),
    }),
    product: () => ({
      component: import('@/components/Product'),
    }),
    cms_page: () => ({
      component: import('@/components/CmsPage'),
    }),
  },
  async asyncData({ route, app, error, store }) {
    const RESULT = {
      type: 'index',
      id: null,
      pageData: {},
    }
    const PATH = route.path.replace('/', '')

    if (!PATH) {
      return RESULT
    }

    try {
      const {
        data: {
          urlResolver: { type, id },
        },
      } = await app.apolloProvider.defaultClient.query({
        query: require('@/apollo/queries/common/urlResolver.graphql'),
        variables: {
          url: PATH,
        },
      })

      if (type && typeof type === 'string') {
        RESULT.type = type.toLowerCase() || 'index'
        RESULT.id = id || 0
      }

      return RESULT
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
    return RESULT
  },
  methods: {
    setCurrentCategoryData() {},
  },
}
</script>
