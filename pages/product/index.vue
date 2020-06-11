<template>
  <product :data="product"></product>
</template>

<script>
import { mapMutations } from 'vuex'
import axios from 'axios'
import product from '../../components/Product'

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

    store.commit('setProducts', data)

    return { product: data }
  },
  created() {},
  methods: {},
  data: () => ({
    product: []
  })
}
</script>