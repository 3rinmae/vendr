

export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get SnackCard() {
    return `
    <div class="col-3">
        <button class="btn border border-dark border-3 bg-white" type="button"
          onclick="app.SnacksController.addSnackToCart('${this.name}')">
          <img class="img-fluid"
            src="${this.imgUrl}" alt="${this.name}">
          <p>Get ${this.name} for ${this.price}</p>
        </button>
      </div>`
  }
}


