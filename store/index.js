export const strict = false

export const state = () => ({
  navbar_title: '古董店',
  header_title: '古 董',
  header_desc: '在 找 什 麼? Look Look',
  NavItems: [{
      icon: 'mdi-home-minus-outline',
      text: '首頁',
      link: '/'
    },
    {
      icon: 'mdi-puzzle',
      text: '商品',
      link: '/product'
    },
    {
      icon: 'mdi-cart',
      text: '購物車',
      link: '/car',
      count: 1
    }
  ],
  ProductClass: [{
      class: 'porcelain',
      name: '瓷器'
    },
    {
      class: 'vase',
      name: '花瓶'
    }
  ],
  drawer: false,
  products: require('@/static/data/product.json')
})

export const mutations = {
  setProducts: (state, products) => (state.products = [...state.products, products]),
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: state => (state.drawer = !state.drawer),
}
