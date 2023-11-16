let cartItems = [];
let cartTotal = 0;

function addToCart(productName, productPrice) {
    cartItems.push({ name: productName, price: productPrice });
    cartTotal += productPrice;

    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById("cart-items");
    const cartTotalSpan = document.getElementById("cart-total");

    // Clear previous items
    cartItemsList.innerHTML = "";

    // Populate cart items
    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
    });

    // Update total
    cartTotalSpan.textContent = cartTotal.toFixed(2);
}
