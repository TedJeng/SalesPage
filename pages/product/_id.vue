<template>
  <v-main v-if="!loading">
    <v-row justify="center">
      <v-col cols="12" class="text-center" v-if="!hasfind">
        找不到相關產品資訊!
        <br />
        <v-btn dark href="/product">選其他產品</v-btn>
      </v-col>
      <v-col cols="10" v-if="hasfind">
        <v-row>
          <v-col class="col-12 col-md-6">
            <v-img
              :src="`./pic/${product_item.picture}.png`"
              :lazy-src="`./pic/${product_item.picture}.png`"
            ></v-img>
          </v-col>
          <v-col class="col-12 col-md-6">
            <v-chip label dark>{{ TurnProductClass(product_item.class) }}</v-chip>
            <v-card class="mx-auto">
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="display-2 mb-6">{{ product_item.product_name }}</v-list-item-title>
                  <v-list-item-subtitle class="display-1 mb-3">{{ product_item.product_short_desc }}</v-list-item-subtitle>
                  <v-list-item-title
                    class="headline mb-3"
                  >$NT {{ thousandSeprator(parseInt(product_item.price - (product_item.price * product_item.discount) / 100)) }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <v-btn class="ma-2" color="blue">
                  <v-icon dark>mdi-cart-outline</v-icon>購買
                </v-btn>
                <v-btn class="ma-2" color="green">
                  <v-icon>mdi-plus-thick</v-icon>加入最愛
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="col-12 col-md-12">{{ product_item.product_desc }}</v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  fetch(context) {
    return context.store.dispatch('getProduct', context.route.params.id)
  },
  created() {
    this.QueryData()
  },
  methods: {
    async QueryData() {
      this.product_item = this.$store.state.product
      this.hasfind = this.$store.state.product != {}
      this.product_class = this.$store.state.ProductClass
    },
    TurnProductClass(item_class) {
      if (item_class) {
        let { name } = this.product_class.filter(
          data => data.class === item_class
        )[0]
        return name
      } else {
        return ''
      }
    },
    thousandSeprator: amount => {
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
  data: () => ({
    product_item: {},
    hasfind: true,
    product_class: [],
    loading: false
  })
}
</script>