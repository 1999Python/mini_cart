let cart = [];

function addToCart(productName, price) {
    let existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(productName) {
    let existingItemIndex = cart.findIndex(item => item.name === productName);
    if (existingItemIndex !== -1) {
        if (cart[existingItemIndex].quantity > 1) {
            cart[existingItemIndex].quantity--;
        } else {
            cart.splice(existingItemIndex, 1);
        }
        updateCart();
    }
}

function updateCart() {
    const cartList = document.getElementById("cart");
    const totalElement = document.getElementById("total");

    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${item.name}</span>
            <span>Quantity: ${item.quantity}</span>
            <span>R${(item.price * item.quantity).toFixed(2)}</span>
            <button onclick="addToCart('${item.name}', ${item.price})">Add</button>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartList.appendChild(listItem);
        total += item.price * item.quantity;
    });

    totalElement.textContent = total.toFixed(2);
}

function checkout() {
    alert(`Total Amount: $${total.toFixed(2)}`);
    cart = [];
    updateCart();
}

updateCart();
