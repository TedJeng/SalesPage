<template>
  <v-row class="mb-6">
    <v-col v-for="item in data" :key="item.id" md="4" lg="3">
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
            <v-img :src="`pic/${item.picture}.png`" :lazy-src="`pic/${item.picture}.png`"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn class="ma-2" color="blue">
            <v-icon dark>mdi-cart-outline</v-icon>
          </v-btn>
          <v-btn class="ma-2" color="green">
            <v-icon>mdi-plus-thick</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  created() {
    this.data.map(data => {
      if (data.picture === undefined || !data.picture) {
        data.picture = 'not_found'
      }
      return data
    })

    this.product_class = this.$store.state.ProductClass
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
  props: ['data'],
  data: () => ({
    product_class: []
  })
}
</script>