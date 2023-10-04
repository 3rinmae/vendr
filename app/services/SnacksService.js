import { AppState } from "../AppState.js"


class SnacksService {
  addSnackToCart(snack) {
    //TODO take in snake string from our parameters
    //Get back the original snack from the AppState using a find
    // can i buy it logic?
    // buy it then push to cart
    // trigger drawing of money and snacks?
    // console.log('you passed me the', snack, 'to the service')
    AppState.cart.push(snack)
    // console.log('the cart now has the', AppState.cart)
    const foundSnack = AppState.snacks.find(Snack => Snack.name == snack)
    console.log('Snack found from AppState', foundSnack)

    if (AppState.money < foundSnack.price) {
      throw new Error('You do not have enough money to purchase this snack')
    }
    AppState.money -= foundSnack.price
    console.log('total money', AppState.money)
  }
}

export const snacksService = new SnacksService()