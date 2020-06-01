<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.text" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="blue" dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon class="mx-4" large>mdi-youtube</v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Youtube</span>
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
            <v-avatar size="45" color="blue">
              <v-icon dark>mdi-account-circle</v-icon>
            </v-avatar>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <!-- main content -->
        <v-row class="mb-6">
          <v-col v-for="item in product" :key="item.id" md="4" lg="3">
            <v-card class="mx-auto" max-width="344">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">{{ TurnProductClass(item.class) }}</div>
                  <v-list-item-title class="headline mb-1">
                    {{
                    item.product_name
                    }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    NT$
                    {{
                    parseInt(item.price - (item.price * item.discount) / 100)
                    }}
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="150" color="grey">
                  <v-img :src="`pic/${item.picture}.png`"></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn text>購買</v-btn>
                <v-btn text>加入清單</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  created() {
    this.$vuetify.theme.dark = true

    this.product.map(data => {
      if (data.picture === undefined || !data.picture) {
        data.picture = 'not_found'
      }
      return data
    })
  },
  methods: {
    TurnProductClass(product_class) {
      if (product_class) {
        let { name } = this.product_class.filter(
          data => data.class === product_class
        )[0]
        return name
      } else {
        return ''
      }
    }
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: 'mdi-trending-up', text: 'Most Popular' },
      { icon: 'mdi-youtube-subscription', text: 'Subscriptions' },
      { icon: 'mdi-history', text: 'History' },
      { icon: 'mdi-playlist-play', text: 'Playlists' },
      { icon: 'mdi-clock', text: 'Watch Later' }
    ],
    product: [
      {
        product_id: 1,
        product_name: '花瓶1',
        product_desc: '花瓶描述1',
        price: 1000,
        discount: 10,
        picture: '1',
        class: 'porcelain'
      },
      {
        product_id: 2,
        product_name: '花瓶2',
        product_desc: '花瓶描述2',
        price: 6666,
        discount: 1,
        class: 'vase'
      },
      {
        product_id: 3,
        product_name: '花瓶3',
        product_desc: '花瓶描述3',
        price: 3000,
        discount: 6,
        picture: '1',
        class: 'porcelain'
      },
      {
        product_id: 4,
        product_name: '花瓶4',
        product_desc: '花瓶描述4',
        price: 5000,
        discount: 5,
        picture: '2',
        class: 'porcelain'
      },
      {
        product_id: 5,
        product_name: '花瓶5',
        product_desc: '花瓶描述5',
        price: 10000,
        discount: 0,
        picture: '',
        class: 'vase'
      },
      {
        product_id: 6,
        product_name: '花瓶6',
        product_desc: '花瓶描述6',
        price: 10000,
        discount: 0,
        picture: '',
        class: 'vase'
      }
    ],
    product_class: [
      {
        class: 'porcelain',
        name: '瓷器'
      },
      {
        class: 'vase',
        name: '花瓶'
      }
    ]
  })
}
</script>
