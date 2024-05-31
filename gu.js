// script.js

let cart = [];
let totalPrice = 0;

function addToCart() {
    const productName = 'Rakib er Bichi'; // Get the actual product name
    const price = 45; // Get the actual product price
    const quantity = parseInt(document.getElementById('quantity').value);

    const item = {
        name: productName,
        price: price,
        quantity: quantity
    };

    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    totalPrice = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        const li = document.createElement('li');
        li.textContent = `${item.name} x ${item.quantity} = $${itemTotal}`;
        cartItems.appendChild(li);
    });

    document.getElementById('total-price').textContent = `$${totalPrice}`;
}

const toggleButton = document.getElementById('navbar-toggle');
const menu = document.getElementById('navbar-menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});
