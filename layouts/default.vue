<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list>
        <v-list-item v-for="item in items" :key="item.text" link @click="LinkTo(item.link)">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left :color="barColor">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon large @click="LinkTo('/')">mdi-shopping</v-icon>
      <v-toolbar-title class="mr-12 align-center" @click="LinkTo('/')">
        <span class="title" v-html="title"></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row>
        <v-col>
          <v-row align="center" style="max-width: 650px">
            <v-text-field
              :append-icon-cb="() => {}"
              placeholder="Search..."
              single-line
              append-icon="mdi-magnify"
              color="white"
              hide-details
            ></v-text-field>
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-row justify="end">
            <v-avatar size="45" :color="barColor">
              <v-icon dark>mdi-account-circle</v-icon>
            </v-avatar>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <!-- main content -->
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  created() {
    this.$vuetify.theme.dark = true
  },
  methods: {
    LinkTo: function(link) {
      this.$router.push(link)
    }
  },
  props: {},
  data: () => ({
    drawer: null,
    items: [{ icon: 'mdi-puzzle', text: '產品', link: '/product' }],
    title: 'GUIR古玩意兒',
    barColor: '#ff5722'
  })
}
</script>

<style>
</style>
