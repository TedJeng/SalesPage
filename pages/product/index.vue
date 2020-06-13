<template>
  <product :data="$store.state.products"></product>
</template>

<script>
import product from '../../components/Product'

export default {
  components: {
    product
  },
  created() {},
  methods: {},
  data: () => ({
    product: []
  })
}
</script>