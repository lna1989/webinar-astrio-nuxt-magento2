<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped dark>
      <AppNavigation />
    </v-navigation-drawer>

    <v-app-bar app clipped-left dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <AppLogo />
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppFooter from '~/components/common/Footer'
import AppLogo from '~/components/common/Logo'
import AppNavigation from '~/components/common/Navigation'

export default {
  components: { AppNavigation, AppLogo, AppFooter },

  data: () => ({
    drawer: null,
  }),
}
</script>
