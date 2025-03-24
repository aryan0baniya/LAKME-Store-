let cart = [];

function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.innerText = parseInt(cartCount.innerText) + 1;
}