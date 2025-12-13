/* ----------------- GLOBAL SCROLL LOGIC ----------------- */

window.scrollToSection = function(sectionId) {
    const section = document.getElementById(sectionId);
    
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
        updateActiveSidebar(sectionId);
    }
};

function updateActiveSidebar(targetId) {
    const allCards = document.querySelectorAll('.cat-card');
    allCards.forEach(card => card.classList.remove('active-cat'));
    
    allCards.forEach(card => {
       const onClickAttr = card.getAttribute('onclick');
       if(onClickAttr && onClickAttr.includes(targetId)) {
           card.classList.add('active-cat');
       }
    });
}

/* ----------------- DOM CONTENT LOADED ----------------- */

document.addEventListener('DOMContentLoaded', function() {

    /* ----------------- CART LOGIC ----------------- */

    let cart = [];
    const addButtons = document.querySelectorAll('.add-btn');

    addButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const price = parseInt(this.getAttribute('data-price'));
            
            addToCart(name, price);
            
            const originalText = this.innerText;
            this.innerText = "Added!";
            this.style.backgroundColor = "#5d3eff";
            this.style.color = "white";
            
            setTimeout(() => {
                this.innerText = originalText;
                this.style.backgroundColor = "";
                this.style.color = "";
            }, 600);
        });
    });

    function addToCart(name, price) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name: name, price: price, quantity: 1 });
        }
        renderCart();
    }

    function renderCart() {
        const cartBox = document.querySelector('.cart-box');
        if (!cartBox) return;

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
        
        cart.forEach((item, index) => {
            total += (item.price * item.quantity);
            htmlContent += `
                <li class="cart-item">
                    <div class="cart-item-info">
                        <span class="item-name">${item.name}</span>
                        <span class="item-calc">₹${item.price} x ${item.quantity}</span>
                    </div>
                    <div class="qty-controls">
                        <button class="qty-btn qty-btn-minus" data-index="${index}">-</button>
                        <span class="qty-text">${item.quantity}</span>
                        <button class="qty-btn qty-btn-plus" data-index="${index}">+</button>
                    </div>
                </li>`;
        });

        htmlContent += '</ul>';
        htmlContent += `
            <div class="cart-total-line">
                <span>Total</span>
                <span>₹${total}</span>
            </div>
            <button class="btn primary-btn" style="width:100%; margin-top:15px;" id="checkoutBtn">Checkout</button>
        `;
        
        cartBox.innerHTML = htmlContent;
        attachCartControlListeners();
        
        document.getElementById('checkoutBtn').addEventListener('click', () => {
             alert("Thanks for choosing WaterWiz! Your total is ₹" + total);
             cart = [];
             renderCart();
        });
    }

    function attachCartControlListeners() {
        document.querySelectorAll('.qty-btn-minus').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                } else {
                    cart.splice(index, 1);
                }
                renderCart();
            });
        });

        document.querySelectorAll('.qty-btn-plus').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                cart[index].quantity++;
                renderCart();
            });
        });
    }

    /* ----------------- MODAL LOGIC ----------------- */

    const modal = document.getElementById("quoteModal");
    const openBtn = document.getElementById("openModalBtn");
    const closeSpan = document.querySelector(".close-btn");

    if (openBtn && modal) {
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = "block";
        });
    }

    if (closeSpan && modal) {
        closeSpan.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });

    /* ----------------- CONTACT FORM LOGIC ----------------- */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("c-name").value;
            const btn = contactForm.querySelector("button");
            const originalBtnText = btn.innerText;

            btn.innerText = "Sending...";

            setTimeout(() => {
                alert(`Thanks ${name}! We have received your message and will contact you shortly.`);
                contactForm.reset();
                btn.innerText = originalBtnText;
            }, 1500);
        });
    }

    /* ----------------- GALLERY LIGHTBOX ----------------- */

    const galleryItems = document.querySelectorAll('.gallery-item');
    if(galleryItems.length > 0) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        document.body.appendChild(lightbox);

        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const caption = item.querySelector('h3')?.innerText || "";
                lightbox.style.display = 'flex';
                lightbox.innerHTML = `
                    <span class="close-lightbox" style="position:absolute; top:20px; right:30px; color:white; font-size:40px; cursor:pointer;">&times;</span>
                    <img src="${img.src}" class="lightbox-img">
                    <div class="lightbox-caption">${caption}</div>
                `;
                
                lightbox.querySelector('.close-lightbox').onclick = () => lightbox.style.display = 'none';
                lightbox.onclick = (e) => { if(e.target === lightbox) lightbox.style.display = 'none'; };
            });
        });
    }
});