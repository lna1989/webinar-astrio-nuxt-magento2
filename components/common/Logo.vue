<template>
  <nuxt-link :to="{ name: 'index' }" title="Главная страница">
    <v-img
      v-if="storeConfig.header_logo_src"
      class="mx-2"
      :src="`${storeConfig.base_media_url}logo/${storeConfig.header_logo_src}`"
      :alt="storeConfig.alt || 'Logo'"
      :max-height="storeConfig.logo_height"
      :max-width="storeConfig.logo_width || 151"
      contain
    ></v-img>
    <span v-else class="white--text"> Astrio Agency </span>
  </nuxt-link>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppLogo',
  computed: {
    ...mapGetters({
      storeConfig: 'storeConfig',
    }),
  },
}
</script>
