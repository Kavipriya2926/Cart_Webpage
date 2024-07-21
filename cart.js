// cart.js

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        
        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        cartItem.appendChild(itemImage);
        
        const itemName = document.createElement('p');
        itemName.textContent = item.name;
        cartItem.appendChild(itemName);
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeFromCart(index));
        cartItem.appendChild(removeButton);
        
        cartItemsContainer.appendChild(cartItem);
    });
}

displayCartItems();
