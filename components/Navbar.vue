<template>
  <v-app-bar app flat dark fixed>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer" />
    <v-container class="mx-auto py-0">
      <v-row align="center">
        <span class="font-weight-light">{{ title }}</span>
        <v-spacer></v-spacer>
        <v-badge
          class="ma-2 hidden-sm-and-down"
          v-for="(navitem,idx) in $store.state.NavItems"
          :key="idx"
          :content="navitem.count"
          :value="showBadge(navitem.count) "
          overlap
        >
          <v-btn large tile depressed @click="LinkTo(navitem.link)">
            <v-icon left>{{ navitem.icon }}</v-icon>
            {{ navitem.text }}
          </v-btn>
        </v-badge>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['toggleDrawer']),
    LinkTo: function(link) {
      this.$router.push(link)
    },
    showBadge: function(count) {
      let iCount = parseInt(count, 10)
      return iCount > 0
    }
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(val) {
        $store.commit('setDrawer', val)
      }
    }
  },
  data: () => ({
    title: '賣骨董'
  })
}
</script>