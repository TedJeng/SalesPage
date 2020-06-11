<template>
  <v-row class="mb-6">
    <v-col v-for="item in data" :key="item.id" md="4" lg="3">
      <v-hover v-slot:default="{ hover }">
        <v-card class="mx-auto" max-width="420">
          <v-img :src="`pic/${item.picture}.png`" :lazy-src="`pic/${item.picture}.png`">
            <v-expand-transition>
              <div
                v-if="hover"
                class="hidden-sm-and-down transition-fast-in-fast-out orange darken-1 v-card--reveal display-3 white--text"
                style="height:100%;"
              >$NT {{ thousandSeprator(parseInt(item.price - (item.price * item.discount) / 100)) }}</div>
            </v-expand-transition>
          </v-img>

          <v-card-title>
            {{
            item.product_name
            }}
            <br />
            {{
            item.product_short_desc
            }}
          </v-card-title>
          <v-card-subtitle>{{ TurnProductClass(item.class) }}</v-card-subtitle>
          <v-card-actions>
            <v-btn class="ma-2" color="blue">
              <v-icon dark>mdi-cart-outline</v-icon>
            </v-btn>
            <v-btn class="ma-2" color="green">
              <v-icon>mdi-plus-thick</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <label
              class="hidden-md-and-up display-1"
            >$NT {{ thousandSeprator(parseInt(item.price - (item.price * item.discount) / 100)) }}</label>
          </v-card-actions>
        </v-card>
      </v-hover>
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
    IconShow(item) {
      return item.show ? item.show : false
    },
    TurnProductClass(product_class) {
      if (product_class) {
        let { name } = this.product_class.filter(
          data => data.class === product_class
        )[0]
        return name
      } else {
        return ''
      }
    },
    thousandSeprator(amount) {
      if (
        amount !== '' ||
        amount !== undefined ||
        amount !== 0 ||
        amount !== '0' ||
        amount !== null
      ) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      } else {
        return amount
      }
    }
  },
  props: ['data'],
  data: () => ({
    hover: false,
    product_class: []
  })
}
</script>

<style scoped>
.v-card--reveal {
  display: flex;
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>