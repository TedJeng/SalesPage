<template>
  <v-navigation-drawer v-model="drawer" app temporary dark>
    <v-list>
      <v-list-item
        v-for="(navitem,idx) in $store.state.NavItems"
        :key="idx"
        link
        @click="LinkTo(navitem.link)"
      >
        <v-list-item-action>
          <v-icon>{{ navitem.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ navitem.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  methods: {
    LinkTo: function(link) {
      this.$router.push(link)
    }
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(val) {
        this.$store.commit('setDrawer', val)
      }
    }
  }
}
</script>