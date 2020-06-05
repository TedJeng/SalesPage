export const strict = false

export const state = () => ({
  products: []
})

export const mutations = {
  SetProducts(state, products) {
    state.products = [...state.products, products];
  }
}
