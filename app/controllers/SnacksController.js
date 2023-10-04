import { snacksService } from "../services/SnacksService.js"


export class SnacksController {
  constructor() {
    console.log('snacks controller loaded')
  }

  addSnackToCart(snack) {
    console.log('this is the snack you selected', snack)
    snacksService.addSnackToCart(snack)
  }
}