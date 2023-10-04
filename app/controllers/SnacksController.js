import { AppState } from "../AppState.js"
import { snacksService } from "../services/SnacksService.js"
import { setHTML } from "../utils/Writer.js"

function _drawSnacks() {
  let content = ''

  AppState.snacks.forEach(snack => content += snack.SnackCard)

  setHTML('SnacksList', content)
}


export class SnacksController {
  constructor() {
    // console.log('snacks controller loaded')
    _drawSnacks()
  }

  addSnackToCart(snack) {
    console.log('this is the snack you selected', snack)
    snacksService.addSnackToCart(snack)
  }
}