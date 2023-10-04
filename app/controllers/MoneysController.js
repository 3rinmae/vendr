import { AppState } from "../AppState.js"
import { moneyService } from "../services/MoneysService.js"
import { setHTML } from "../utils/Writer.js"

function _drawMoney() {
  // console.log('total in bank', AppState.money)
  setHTML('totalMoney', AppState.money)
}
export class MoneysController {
  constructor() {
    // console.log('does this work')
    AppState.on('money', _drawMoney)
  }
  addQuarter() {
    moneyService.addQuarter()
  }
}