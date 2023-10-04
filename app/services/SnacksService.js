import { AppState } from "../AppState.js"


class SnacksService {
  addSnackToCart(snack) {
    // console.log('you passed me the', snack, 'to the service')
    AppState.cart.push(snack)
    // console.log('the cart now has the', snack)
  }
}

export const snacksService = new SnacksService()