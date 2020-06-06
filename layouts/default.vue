<template>
  <v-app>
    <Navbar />
    <DrawMenu />
    <v-content>
      <v-container fluid>
        <!-- main content -->
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar'
import DrawMenu from '../components/DrawMenu'

export default {
  components: {
    Navbar,
    DrawMenu
  },
  created() {
    this.$vuetify.theme.light = true
  },
  methods: {
    LinkTo: function(link) {
      this.$router.push(link)
    }
  },
  data: () => ({
    drawer: null
  })
}
</script>

<style>
</style>
