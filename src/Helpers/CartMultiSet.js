class CartMultiSet {
  #cartItems = [];
  constructor(cartItems) {
    this.#cartItems = cartItems;
  }

  addItem(newCartItem) {
    for (const cartItemIndex in this.#cartItems) {
      if (newCartItem.title === this.#cartItems[cartItemIndex].title) {
        this.#cartItems[cartItemIndex].amount += newCartItem.amount;
        return;
      }
    }
    this.#cartItems.push(newCartItem);
  }

  get cartItems() {
    return { ...this.#cartItems };
  }

  deleteItem(title) {
    for (const cartItemIndex in this.#cartItems) {
      if (title === this.#cartItems[cartItemIndex].title) {
        this.#cartItems.splice(cartItemIndex, 1);
      }
    }
  }
}

export default CartMultiSet;
