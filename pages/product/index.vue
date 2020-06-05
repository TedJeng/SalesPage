<template>
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
import { mapMutations } from 'vuex'
import axios from 'axios'

export default {
  async asyncData({ store }) {
    let { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    data = [
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
    ]

    store.commit('SetProducts', data)

    return { product: data }
  },
  created() {
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
  data: () => ({
    product: [],
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