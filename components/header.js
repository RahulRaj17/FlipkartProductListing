export function createHeader(){
    // Get the navigation element
    const nav = document.querySelector('nav');

    // Create logo element and set its properties
    const logo = document.createElement('div');
    logo.classList.add('logo');
    const logoImg = document.createElement('img');
    logoImg.src = 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    logoImg.alt = 'Flipkart Logo';
    logo.appendChild(logoImg);

    // Create search element and set its properties
    const search = document.createElement('div');
    search.classList.add('search');
    const searchBox = document.createElement('input');
    searchBox.type = 'text';
    searchBox.classList.add('search-box');
    searchBox.placeholder = 'Search';
    search.appendChild(searchBox);

    // Create become-seller element and set its properties
    const becomeSeller = document.createElement('div');
    becomeSeller.classList.add('become-seller');
    const sellerLink = document.createElement('a');
    sellerLink.href = 'https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect';
    sellerLink.textContent = 'Become a Seller';
    becomeSeller.appendChild(sellerLink);

    // Create cart element and set its properties
    const cart = document.createElement('div');
    cart.classList.add('cart');
    const cartText = document.createElement('p');
    cartText.textContent = 'Cart';
    cart.appendChild(cartText);

    // Add logo, search, become-seller, and cart elements to the navigation element
    nav.appendChild(logo);
    nav.appendChild(search);
    nav.appendChild(becomeSeller);
    nav.appendChild(cart);
}