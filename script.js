/* =========================
   CART
========================= */

let cart = [];

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    showNotification(name + " added to cart!");
}


function updateCart() {

    const cartCount = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartCount.textContent = cart.length;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        cartTotal.textContent = "0";

        return;
    }

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">

                <div>
                    <p>${item.name}</p>
                    <small>₹${item.price}</small>
                </div>

                <button
                    onclick="removeFromCart(${index})"
                    style="
                    border:none;
                    background:none;
                    color:#c96b28;
                    cursor:pointer;
                    font-size:16px;">
                    ×
                </button>

            </div>
        `;

    });

    cartTotal.textContent = total;

}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


function openCart() {

    document
        .getElementById("cartModal")
        .classList.add("show");

}


function closeCart() {

    document
        .getElementById("cartModal")
        .classList.remove("show");

}


function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    alert(
        "Thank you for ordering from Spice Villa! 🍴\n\nYour order has been received."
    );

    cart = [];

    updateCart();

    closeCart();

}


/* =========================
   MENU FILTER
========================= */

function filterMenu(category, button) {

    const cards =
        document.querySelectorAll(".food-card");

    const buttons =
        document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => {

        btn.classList.remove("active");

    });

    button.classList.add("active");


    cards.forEach(card => {

        const cardCategory =
            card.getAttribute("data-category");

        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.style.display = "";

            card.style.animation =
                "cardIn 0.5s ease";

        } else {

            card.style.display = "none";

        }

    });

}


/* =========================
   FAVORITE BUTTON
========================= */

document.querySelectorAll(".heart-btn")
.forEach(button => {

    button.addEventListener("click", function () {

        if (this.textContent === "♡") {

            this.textContent = "♥";

            this.style.color = "#c96b28";

        } else {

            this.textContent = "♡";

            this.style.color = "";

        }

    });

});


/* =========================
   CONTACT FORM
========================= */

function sendMessage(event) {

    event.preventDefault();

    alert(
        "Thank you! ❤️\n\nYour message has been sent successfully."
    );

    event.target.reset();

}


/* =========================
   CLOSE CART OUTSIDE
========================= */

document
    .getElementById("cartModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeCart();

        }

    });


/* =========================
   NAVBAR ACTIVE LINK
========================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        if (
            window.scrollY >= sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});