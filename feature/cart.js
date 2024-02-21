export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId, priceCents) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId,
      quantity: 1,
      priceCents: priceCents,
    });
  }

  saveToStorage();
}

export function removeCartItem(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

export function decreaseItemQuantity(productId) {
  const item = cart.find((item) => item.productId === productId);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
    saveToStorage();
    return;
  } else {
    removeCartItem(productId);
  }
}

export function increaseItemQuantity(productId) {
  const item = cart.find((item) => item.productId === productId);
  if (item && item.quantity > 0) {
    item.quantity += 1;
    saveToStorage();
    return;
  }
}

export function updateSubtotal() {
  let subtotal = 0;

  cart.forEach((item) => {
    subtotal += item.priceCents * item.quantity;
  });
  document.querySelector(".js-subtotal-price").innerHTML = `$${(subtotal / 100).toFixed(2)}`;
}
