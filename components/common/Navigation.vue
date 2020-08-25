<template>
  <v-list dense>
    <v-list-item
      v-for="(category, index) in categoryTree"
      :key="`category-${index}`"
      nuxt
      :to="{ path: `/${category.url_path}${storeConfig.category_url_suffix}` }"
    >
      <v-list-item-content>
        <v-list-item-title>{{ category.name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppNavigation',
  computed: {
    ...mapGetters({
      storeConfig: 'storeConfig',
      categoryTree: 'category/tree',
    }),
  },
}
</script>
