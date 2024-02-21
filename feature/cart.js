export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId, priceCents, swatchValue) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId && swatchValue === cartItem.swatch) {
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
      swatch: swatchValue,
    });
  }

  saveToStorage();
}

export function removeCartItem(productId, swatchValue) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId || cartItem.swatch !== swatchValue) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

export function decreaseItemQuantity(productId, swatchValue) {
  let targetItem;

  cart.forEach((item) => {
    if (item.swatch === swatchValue && item.productId === productId) {
      targetItem = item;
    }
  });

  if (targetItem && targetItem.quantity - 1 > 0) {
    targetItem.quantity -= 1;
    saveToStorage();
    return;
  } else if (targetItem && targetItem.quantity - 1 === 0) {
    removeCartItem(productId, swatchValue);
  }
}

export function increaseItemQuantity(productId, swatchValue) {
  let targetItem;

  cart.forEach((item) => {
    if (item.swatch === swatchValue && item.productId === productId) {
      targetItem = item;
    }
  });

  if (targetItem && targetItem.quantity > 0) {
    targetItem.quantity += 1;
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
