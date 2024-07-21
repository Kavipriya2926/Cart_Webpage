let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

function addToCart(item) {
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const item = event.target.closest('.deal-item');
        const itemName = item.querySelector('p').textContent;
        const itemImage = item.querySelector('img').src;
        
        // Add animation class
        item.classList.add('adding-to-cart');
        
        // Remove animation class after animation ends
        item.addEventListener('animationend', () => {
            item.classList.remove('adding-to-cart');
        }, { once: true });

        addToCart({ name: itemName, image: itemImage });
    });
});

updateCartCount();
