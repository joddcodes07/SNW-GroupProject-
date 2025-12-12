var modal = document.getElementById("quoteModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close-btn")[0];

if (btn) {
    btn.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
    }
}

if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
}

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const feed = document.getElementById("mainFeed");
    
    if (section && feed) {
        const offsetTop = section.offsetTop - feed.offsetTop;
        feed.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    }
}
/* --- CART FUNCTIONALITY --- */
let cart = [];
const addButtons = document.querySelectorAll('.add-btn');
for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const price = parseInt(this.getAttribute('data-price'));
        cart.push({
            name: name,
            price: price
        });
        console.log("Item added:", name);
        renderCart();
    });
}

function renderCart() {
    const cartBox = document.querySelector('.cart-box');
    if (cart.length === 0) {
        cartBox.innerHTML = `
            <div class="cart-empty-state">
                <span class="material-symbols-outlined" style="font-size: 40px; color: #ccc;">shopping_cart</span>
                <p>No items in your cart</p>
            </div>`;
        return;
    }
    let htmlContent = '<ul class="cart-list">';
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i]; 
        total = total + item.price;

        htmlContent += `
            <li class="cart-item">
                <span>${item.name}</span>
                <div class="cart-price-box">
                    <span>₹${item.price}</span>
                    <button class="remove-btn" data-index="${i}">×</button>
                </div>
            </li>`;
    }

    htmlContent += '</ul>';
    htmlContent += `
        <div class="cart-total">
            <span>Total</span>
            <span>₹${total}</span>
        </div>
        <button class="btn primary-btn" style="width:100%; margin-top:15px;">Checkout</button>
    `;
    cartBox.innerHTML = htmlContent;
    attachRemoveListeners();
}

function attachRemoveListeners() {
    const removeButtons = document.querySelectorAll('.remove-btn');
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', function() {
            const indexToRemove = this.getAttribute('data-index');
            cart.splice(indexToRemove, 1);
            console.log("Item removed at index:", indexToRemove);
            renderCart();
        });
    }
}