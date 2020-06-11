<template>
  <v-row>
    <v-col cols="12">
      <v-card dark>
        <v-img src="pic/home_background.png" eager>
          <v-row class="fill-height pa-3" align="center">
            <v-col cols="12" md="7" offset-md="5">
              <h2 class="display-3 font-weight-light yellow--text">骨 董</h2>
              <div class="subheading text-uppercase yellow--text">在 找 什 麼? Look Look</div>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
    </v-col>
    <v-col cols="12">
      <product :data="product"></product>
    </v-col>
  </v-row>
</template>

<script>
import product from '../components/Product'
import axios from 'axios'

export default {
  components: {
    product
  },
  async asyncData({ store }) {
    //let { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    let data = [
      {
        product_id: 1,
        product_name: '花瓶1',
        product_short_desc: '花瓶描述1',
        price: 1000,
        discount: 10,
        picture: '1',
        class: 'porcelain',
        product_desc: '這是花瓶描述1，內容詳見'
      },
      {
        product_id: 2,
        product_name: '花瓶2',
        product_short_desc: '花瓶描述2',
        price: 6666,
        discount: 1,
        class: 'vase',
        product_desc: '這是花瓶描述2，內容詳見'
      },
      {
        product_id: 3,
        product_name: '花瓶3',
        product_short_desc: '花瓶描述3',
        price: 3000,
        discount: 6,
        picture: '1',
        class: 'porcelain',
        product_desc: '這是花瓶描述3，內容詳見'
      },
      {
        product_id: 4,
        product_name: '花瓶4',
        product_short_desc: '花瓶描述4',
        price: 5000,
        discount: 5,
        picture: '2',
        class: 'porcelain',
        product_desc: '這是花瓶描述4，內容詳見'
      },
      {
        product_id: 5,
        product_name: '花瓶5',
        product_short_desc: '花瓶描述5',
        price: 10000,
        discount: 0,
        picture: '',
        class: 'vase',
        product_desc: '這是花瓶描述5，內容詳見'
      },
      {
        product_id: 6,
        product_name: '花瓶6',
        product_short_desc: '花瓶描述6',
        price: 10000,
        discount: 0,
        picture: '',
        class: 'vase',
        product_desc: '這是花瓶描述6，內容詳見'
      }
    ]

    store.commit('setProducts', data)

    return { product: data }
  },
  data: () => ({
    product: []
  })
}
</script>
