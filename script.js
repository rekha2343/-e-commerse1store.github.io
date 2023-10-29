let cartItems = [];
let cartTotal = 0;

function addToCart() {
    const item = {
        name: "Product Name",
        price: 250
    };
    cartItems.push(item);
    cartTotal += item.price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    const totalSpan = document.getElementById("cart-total");
    cartList.innerHTML = "";
    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `₹{item.name} - ₹${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });
    totalSpan.textContent = `₹${cartTotal.toFixed(2)}`;
}
