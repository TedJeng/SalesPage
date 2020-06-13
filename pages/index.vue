<template>
  <v-row>
    <v-col cols="12">
      <v-card dark>
        <v-img src="pic/home_background.png" eager max-height="600px">
          <v-row class="fill-height pa-3" align="center">
            <v-col cols="12" md="7" offset-md="5">
              <h2 class="display-3 font-weight-light black--text">{{ $store.state.header_title }}</h2>
              <div class="subheading text-uppercase black--text">{{ $store.state.header_desc }}</div>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
    </v-col>
    <v-col cols="12">
      <product :data="$store.state.products" maxlength="4"></product>
    </v-col>
  </v-row>
</template>

<script>
import product from '../components/Product'

export default {
  components: {
    product
  },
  data: () => ({
    product: []
  })
}
</script>
