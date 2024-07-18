document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const clearCartButton = document.getElementById('clear-cart');
    const cartCount = document.getElementById('cart-count');

    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                itemElement.innerHTML = `
                    <img src="${item.img}" alt="${item.title}" class="cart-item-img">
                    <div class="cart-item-details">
                        <h2>${item.title}</h2>
                        <p>${item.description}</p>
                        <p>${item.price}</p>
                        <button class="remove-from-cart" data-id="${item.id}">Remove</button>
                    </div>
                `;
                cartItemsContainer.appendChild(itemElement);
                total += parseFloat(item.price.replace('GH¢ ', ''));
            });
        }

        cartTotal.textContent = `Total: GH¢ ${total.toFixed(2)}`;
        cartCount.textContent = cart.length;
    }

    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-from-cart')) {
            const id = parseInt(e.target.getAttribute('data-id'));
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart = cart.filter(item => item.id !== id);
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCart();
        }
    });

    clearCartButton.addEventListener('click', () => {
        localStorage.removeItem('cart');
        loadCart();
    });

    loadCart();
});
