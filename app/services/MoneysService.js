import { AppState } from "../AppState.js"


class MoneyService {
  addQuarter() {
    console.log('[MONEY SERVICE] AppState.money before .25', AppState.money)
    AppState.money += .25
    console.log('[MONEY SERVICE] AppState.money after .25', AppState.money)

  }
}

export const moneyService = new MoneyService