import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  snacks = [
    new Snack({ name: 'Apple', price: .50, imgUrl: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },

      { name: 'Banana', price: .25, imgUrl: 'https://images.unsplash.com/photo-1605666807892-8c11d020bede?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhbmFuYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },

      { name: 'Mango', price: .75, imgUrl: 'https://images.unsplash.com/photo-1617926247067-9f6f71f91c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fG1hbmdvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' }
    )
  ]

  money = 0





  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})