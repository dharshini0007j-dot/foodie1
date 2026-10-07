/* =====================================================
   FOODIEHUB - JAVASCRIPT
   Vanilla JavaScript only
===================================================== */


/* =====================================================
   FOOD DATA
===================================================== */

const foods = [

    {
        id: 1,
        name: "Margherita Pizza",
        category: "Pizza",
        price: 199,
        rating: 4.8,
        description: "Classic pizza with tomato, mozzarella and basil.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80",
        badge: "Best Seller"
    },

    {
        id: 2,
        name: "Farmhouse Pizza",
        category: "Pizza",
        price: 249,
        rating: 4.7,
        description: "Loaded with fresh vegetables and melted cheese.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80",
        badge: "20% OFF"
    },

    {
        id: 3,
        name: "Classic Chicken Burger",
        category: "Burger",
        price: 159,
        rating: 4.8,
        description: "Juicy chicken patty with fresh lettuce and sauce.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
        badge: "Trending"
    },

    {
        id: 4,
        name: "Cheese Burger",
        category: "Burger",
        price: 179,
        rating: 4.6,
        description: "Crispy patty topped with melted cheddar cheese.",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80",
        badge: "Best Seller"
    },

    {
        id: 5,
        name: "Masala Dosa",
        category: "South Indian",
        price: 80,
        rating: 4.9,
        description: "Crispy dosa served with masala, chutney and sambar.",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=80",
        badge: "Trending"
    },

    {
        id: 6,
        name: "Paneer Dosa",
        category: "South Indian",
        price: 120,
        rating: 4.7,
        description: "Crispy dosa filled with delicious paneer masala.",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 7,
        name: "Veg Hakka Noodles",
        category: "Noodles",
        price: 130,
        rating: 4.6,
        description: "Stir-fried noodles with fresh vegetables and spices.",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 8,
        name: "Chicken Noodles",
        category: "Noodles",
        price: 170,
        rating: 4.8,
        description: "Spicy noodles tossed with tender chicken pieces.",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80",
        badge: "Best Seller"
    },

    {
        id: 9,
        name: "Chicken Biryani",
        category: "Chicken",
        price: 220,
        rating: 4.9,
        description: "Aromatic basmati rice cooked with tender chicken.",
        image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=700&q=80",
        badge: "Best Seller"
    },

    {
        id: 10,
        name: "Grilled Chicken",
        category: "Chicken",
        price: 250,
        rating: 4.7,
        description: "Juicy grilled chicken seasoned with aromatic herbs.",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80",
        badge: "Trending"
    },

    {
        id: 11,
        name: "Chocolate Cake",
        category: "Desserts",
        price: 120,
        rating: 4.8,
        description: "Rich and creamy chocolate cake for sweet lovers.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80",
        badge: "20% OFF"
    },

    {
        id: 12,
        name: "Chocolate Brownie",
        category: "Desserts",
        price: 100,
        rating: 4.7,
        description: "Warm chocolate brownie with a soft gooey center.",
        image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 13,
        name: "Fresh Fruit Juice",
        category: "Drinks",
        price: 90,
        rating: 4.6,
        description: "Freshly prepared seasonal fruit juice.",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80",
        badge: "Healthy"
    },

    {
        id: 14,
        name: "Mango Smoothie",
        category: "Drinks",
        price: 110,
        rating: 4.8,
        description: "Creamy mango smoothie made with fresh fruit.",
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 15,
        name: "Healthy Salad Bowl",
        category: "Healthy Food",
        price: 160,
        rating: 4.7,
        description: "Fresh vegetables, greens and healthy toppings.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",
        badge: "Healthy"
    },

    {
        id: 16,
        name: "Avocado Toast",
        category: "Healthy Food",
        price: 180,
        rating: 4.6,
        description: "Toasted bread topped with creamy avocado and herbs.",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=700&q=80"
    }

];


/* =====================================================
   APPLICATION STATE
===================================================== */

let cart = JSON.parse(localStorage.getItem("foodiehubCart")) || [];

let favorites =
    JSON.parse(localStorage.getItem("foodiehubFavorites")) || [];

let currentFilter = "All";

let currentSearch = "";

let currentTestimonial = 0;

let countdownEnd =
    localStorage.getItem("foodiehubOfferEnd");


/* =====================================================
   DOM ELEMENTS
===================================================== */

const foodGrid = document.getElementById("foodGrid");

const noResults = document.getElementById("noResults");

const menuSearch = document.getElementById("menuSearch");

const searchInput = document.getElementById("searchInput");

const searchPanel = document.getElementById("searchPanel");

const cartSidebar = document.getElementById("cartSidebar");

const cartOverlay = document.getElementById("cartOverlay");

const cartItems = document.getElementById("cartItems");

const emptyCart = document.getElementById("emptyCart");

const cartSummary = document.getElementById("cartSummary");

const cartCount = document.getElementById("cartCount");

const favoriteCount = document.getElementById("favoriteCount");

const favoritesModal = document.getElementById("favoritesModal");

const favoritesList = document.getElementById("favoritesList");

const checkoutModal = document.getElementById("checkoutModal");

const successModal = document.getElementById("successModal");

const toast = document.getElementById("toast");


/* =====================================================
   INITIALIZATION
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadTheme();

    initializeCountdown();

    renderFood();

    updateCart();

    updateFavoritesCount();

    renderFavorites();

    createTestimonialDots();

    showTestimonial(0);

    setupEventListeners();

});


/* =====================================================
   EVENT LISTENERS
===================================================== */

function setupEventListeners() {

    /* Mobile navigation */
    document
        .getElementById("hamburger")
        .addEventListener("click", toggleMobileMenu);


    /* Search */
    document
        .getElementById("openSearchBtn")
        .addEventListener("click", openSearch);

    document
        .getElementById("closeSearchBtn")
        .addEventListener("click", closeSearch);

    searchInput.addEventListener("input", () => {

        const value = searchInput.value;

        menuSearch.value = value;

        currentSearch = value;

        renderFood();

    });


    menuSearch.addEventListener("input", () => {

        currentSearch = menuSearch.value;

        searchInput.value = menuSearch.value;

        renderFood();

    });


    /* Filters */
    document
        .getElementById("filterButtons")
        .addEventListener("click", (event) => {

            const button =
                event.target.closest(".filter-btn");

            if (!button) return;

            currentFilter = button.dataset.filter;

            document
                .querySelectorAll(".filter-btn")
                .forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            renderFood();

        });


    /* Categories */
    document
        .querySelectorAll(".category-card")
        .forEach(card => {

            card.addEventListener("click", () => {

                const category = card.dataset.category;

                currentFilter = category;

                document
                    .querySelectorAll(".filter-btn")
                    .forEach(btn => {

                        btn.classList.toggle(
                            "active",
                            btn.dataset.filter === category
                        );

                    });

                document
                    .getElementById("menu")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

                renderFood();

            });

        });


    /* Cart */
    document
        .getElementById("cartBtn")
        .addEventListener("click", openCart);

    document
        .getElementById("closeCartBtn")
        .addEventListener("click", closeCart);

    cartOverlay.addEventListener("click", closeCart);

    document
        .getElementById("emptyCartBtn")
        .addEventListener("click", () => {

            closeCart();

            document
                .getElementById("menu")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });


    /* Favorites */
    document
        .getElementById("favoritesBtn")
        .addEventListener("click", openFavorites);

    document
        .getElementById("closeFavoritesBtn")
        .addEventListener("click", closeFavorites);


    /* Checkout */
    document
        .getElementById("checkoutBtn")
        .addEventListener("click", openCheckout);

    document
        .getElementById("closeCheckoutBtn")
        .addEventListener("click", closeCheckout);

    document
        .getElementById("checkoutForm")
        .addEventListener("submit", placeOrder);


    /* Success */
    document
        .getElementById("successCloseBtn")
        .addEventListener("click", closeSuccess);


    /* Contact */
    document
        .getElementById("contactForm")
        .addEventListener("submit", submitContactForm);


    /* Theme */
    document
        .getElementById("themeToggle")
        .addEventListener("click", toggleTheme);


    /* Hero */
    document
        .getElementById("heroOrderBtn")
        .addEventListener("click", () => {

            document
                .getElementById("menu")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });


    /* Offer */
    document
        .getElementById("claimOffer")
        .addEventListener("click", () => {

            showToast(
                "🏷️",
                "Offer Activated",
                "20% weekend discount is ready for your order!"
            );

            document
                .getElementById("menu")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });


    /* View All */
    document
        .getElementById("viewAllBtn")
        .addEventListener("click", () => {

            currentFilter = "All";

            currentSearch = "";

            menuSearch.value = "";

            searchInput.value = "";

            document
                .querySelectorAll(".filter-btn")
                .forEach(btn => {

                    btn.classList.toggle(
                        "active",
                        btn.dataset.filter === "All"
                    );

                });

            renderFood();

        });


    /* Testimonials */
    document
        .getElementById("prevTestimonial")
        .addEventListener("click", () => {

            currentTestimonial--;

            if (currentTestimonial < 0) {

                currentTestimonial =
                    document.querySelectorAll(".testimonial").length - 1;

            }

            showTestimonial(currentTestimonial);

        });


    document
        .getElementById("nextTestimonial")
        .addEventListener("click", () => {

            currentTestimonial++;

            const total =
                document.querySelectorAll(".testimonial").length;

            if (currentTestimonial >= total) {
                currentTestimonial = 0;
            }

            showTestimonial(currentTestimonial);

        });


    /* Restaurant buttons */
    document
        .querySelectorAll(".restaurant-menu-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                document
                    .getElementById("menu")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            });

        });


    /* Escape key */
    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeCart();

            closeSearch();

            closeFavorites();

            closeCheckout();

            closeSuccess();

        }

    });

}


/* =====================================================
   RENDER FOOD
===================================================== */

function renderFood() {

    const searchTerm =
        currentSearch.trim().toLowerCase();


    const filteredFoods = foods.filter(food => {

        const matchesFilter =
            currentFilter === "All" ||
            food.category === currentFilter;


        const matchesSearch =
            food.name.toLowerCase().includes(searchTerm) ||
            food.category.toLowerCase().includes(searchTerm) ||
            food.description.toLowerCase().includes(searchTerm);


        return matchesFilter && matchesSearch;

    });


    foodGrid.innerHTML = "";


    if (filteredFoods.length === 0) {

        noResults.classList.remove("hidden");

        return;

    }


    noResults.classList.add("hidden");


    filteredFoods.forEach(food => {

        foodGrid.appendChild(
            createFoodCard(food)
        );

    });

}


/* =====================================================
   CREATE FOOD CARD
===================================================== */

function createFoodCard(food) {

    const card =
        document.createElement("article");

    card.className = "food-card";


    const isFavorite =
        favorites.includes(food.id);


    let badgeHTML = "";

    if (food.badge) {

        let badgeClass = "";

        if (food.badge.includes("Trending")) {
            badgeClass = "trending";
        }

        if (food.badge.includes("Best")) {
            badgeClass = "best";
        }

        if (food.badge.includes("OFF")) {
            badgeClass = "discount";
        }

        badgeHTML = `
            <span class="food-badge ${badgeClass}">
                ${getBadgeIcon(food.badge)} ${food.badge}
            </span>
        `;

    }


    card.innerHTML = `

        <div class="food-image-wrapper">

            <img
                src="${food.image}"
                alt="${food.name}"
                loading="lazy">

            <div class="food-badges">
                ${badgeHTML}
            </div>

            <button
                class="favorite-btn ${isFavorite ? "active" : ""}"
                data-id="${food.id}"
                aria-label="Add ${food.name} to favorites">

                ${isFavorite ? "❤️" : "🤍"}

            </button>

        </div>


        <div class="food-content">

            <span class="food-category">
                ${food.category}
            </span>

            <h3>
                ${food.name}
            </h3>

            <p class="food-description">
                ${food.description}
            </p>

            <div class="food-rating">

                <span class="stars">
                    ★★★★★
                </span>

                <strong>
                    ${food.rating}
                </strong>

            </div>

            <div class="food-bottom">

                <span class="food-price">
                    ₹${food.price}
                </span>

                <button
                    class="add-cart-btn"
                    data-id="${food.id}">
                    + Add
                </button>

            </div>

        </div>
    `;


    card
        .querySelector(".favorite-btn")
        .addEventListener("click", () => {

            toggleFavorite(food.id);

        });


    card
        .querySelector(".add-cart-btn")
        .addEventListener("click", () => {

            addToCart(food.id);

        });


    return card;
}


/* =====================================================
   BADGE ICON
===================================================== */

function getBadgeIcon(badge) {

    if (badge.includes("Trending")) {
        return "🔥";
    }

    if (badge.includes("Best")) {
        return "⭐";
    }

    if (badge.includes("OFF")) {
        return "🏷️";
    }

    if (badge.includes("Healthy")) {
        return "🥗";
    }

    return "";
}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(foodId) {

    const food =
        foods.find(item => item.id === foodId);

    if (!food) return;


    const existingItem =
        cart.find(item => item.id === foodId);


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            id: foodId,
            quantity: 1
        });

    }


    saveCart();

    updateCart();


    showToast(
        "🛒",
        "Added to Cart",
        `${food.name} added to your cart!`
    );

}


/* =====================================================
   UPDATE CART
===================================================== */

function updateCart() {

    const totalItems =
        cart.reduce(
            (total, item) => total + item.quantity,
            0
        );


    cartCount.textContent = totalItems;


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        emptyCart.classList.remove("hidden");

        cartSummary.classList.add("hidden");

        return;

    }


    emptyCart.classList.add("hidden");

    cartSummary.classList.remove("hidden");


    cart.forEach(cartItem => {

        const food =
            foods.find(item => item.id === cartItem.id);

        if (!food) return;


        const itemElement =
            document.createElement("div");

        itemElement.className = "cart-item";


        itemElement.innerHTML = `

            <img
                src="${food.image}"
                alt="${food.name}">

            <div class="cart-item-info">

                <h4>${food.name}</h4>

                <p>₹${food.price}</p>

                <div class="quantity-controls">

                    <button
                        class="decrease"
                        data-id="${food.id}">
                        −
                    </button>

                    <span>
                        ${cartItem.quantity}
                    </span>

                    <button
                        class="increase"
                        data-id="${food.id}">
                        +
                    </button>

                </div>

            </div>

            <button
                class="remove-item"
                data-id="${food.id}">
                Remove
            </button>

        `;


        itemElement
            .querySelector(".decrease")
            .addEventListener("click", () => {

                decreaseQuantity(food.id);

            });


        itemElement
            .querySelector(".increase")
            .addEventListener("click", () => {

                increaseQuantity(food.id);

            });


        itemElement
            .querySelector(".remove-item")
            .addEventListener("click", () => {

                removeFromCart(food.id);

            });


        cartItems.appendChild(itemElement);

    });


    calculateTotals();

}


/* =====================================================
   INCREASE QUANTITY
===================================================== */

function increaseQuantity(foodId) {

    const item =
        cart.find(item => item.id === foodId);

    if (!item) return;

    item.quantity++;

    saveCart();

    updateCart();

}


/* =====================================================
   DECREASE QUANTITY
===================================================== */

function decreaseQuantity(foodId) {

    const item =
        cart.find(item => item.id === foodId);

    if (!item) return;


    if (item.quantity > 1) {

        item.quantity--;

    } else {

        cart =
            cart.filter(item => item.id !== foodId);

    }


    saveCart();

    updateCart();

}


/* =====================================================
   REMOVE FROM CART
===================================================== */

function removeFromCart(foodId) {

    const food =
        foods.find(item => item.id === foodId);


    cart =
        cart.filter(item => item.id !== foodId);


    saveCart();

    updateCart();


    if (food) {

        showToast(
            "🗑️",
            "Removed",
            `${food.name} removed from your cart.`
        );

    }

}


/* =====================================================
   CALCULATE CART TOTALS
===================================================== */

function calculateTotals() {

    const subtotalValue =
        cart.reduce((total, cartItem) => {

            const food =
                foods.find(item => item.id === cartItem.id);

            return total +
                (food.price * cartItem.quantity);

        }, 0);


    const deliveryFee =
        subtotalValue > 0 ? 40 : 0;


    const discount =
        subtotalValue >= 400
            ? 50
            : 0;


    const grandTotal =
        subtotalValue +
        deliveryFee -
        discount;


    document.getElementById("subtotal").textContent =
        `₹${subtotalValue}`;

    document.getElementById("deliveryFee").textContent =
        `₹${deliveryFee}`;

    document.getElementById("discount").textContent =
        `-₹${discount}`;

    document.getElementById("grandTotal").textContent =
        `₹${grandTotal}`;


    document.getElementById("checkoutTotal").textContent =
        `₹${grandTotal}`;

}


/* =====================================================
   LOCAL STORAGE - CART
===================================================== */

function saveCart() {

    localStorage.setItem(
        "foodiehubCart",
        JSON.stringify(cart)
    );

}


/* =====================================================
   FAVORITES
===================================================== */

function toggleFavorite(foodId) {

    const food =
        foods.find(item => item.id === foodId);


    if (!food) return;


    if (favorites.includes(foodId)) {

        favorites =
            favorites.filter(id => id !== foodId);

        showToast(
            "💔",
            "Removed",
            `${food.name} removed from favorites.`
        );

    } else {

        favorites.push(foodId);

        showToast(
            "❤️",
            "Favorite Added",
            `${food.name} added to favorites!`
        );

    }


    saveFavorites();

    updateFavoritesCount();

    renderFood();

    renderFavorites();

}


/* =====================================================
   SAVE FAVORITES
===================================================== */

function saveFavorites() {

    localStorage.setItem(
        "foodiehubFavorites",
        JSON.stringify(favorites)
    );

}


/* =====================================================
   UPDATE FAVORITE COUNT
===================================================== */

function updateFavoritesCount() {

    favoriteCount.textContent =
        favorites.length;

}


/* =====================================================
   FAVORITES MODAL
===================================================== */

function openFavorites() {

    renderFavorites();

    favoritesModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeFavorites() {

    favoritesModal.classList.remove("active");

    document.body.style.overflow = "";

}


/* =====================================================
   RENDER FAVORITES
===================================================== */

function renderFavorites() {

    favoritesList.innerHTML = "";


    if (favorites.length === 0) {

        favoritesList.innerHTML = `

            <div class="empty-favorites">

                <div>❤️</div>

                <h3>No favorites yet</h3>

                <p>
                    Start adding your favorite dishes.
                </p>

            </div>

        `;

        return;

    }


    favorites.forEach(foodId => {

        const food =
            foods.find(item => item.id === foodId);

        if (!food) return;


        const item =
            document.createElement("div");

        item.className = "favorite-list-item";


        item.innerHTML = `

            <img
                src="${food.image}"
                alt="${food.name}">

            <div>

                <h4>${food.name}</h4>

                <p>₹${food.price}</p>

            </div>

            <button
                class="remove-favorite"
                data-id="${food.id}">
                Remove
            </button>

        `;


        item
            .querySelector(".remove-favorite")
            .addEventListener("click", () => {

                toggleFavorite(food.id);

            });


        favoritesList.appendChild(item);

    });

}


/* =====================================================
   CART OPEN / CLOSE
===================================================== */

function openCart() {

    cartSidebar.classList.add("active");

    cartOverlay.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeCart() {

    cartSidebar.classList.remove("active");

    cartOverlay.classList.remove("active");

    document.body.style.overflow = "";

}


/* =====================================================
   SEARCH PANEL
===================================================== */

function openSearch() {

    searchPanel.classList.add("active");

    setTimeout(() => {
        searchInput.focus();
    }, 200);

}


function closeSearch() {

    searchPanel.classList.remove("active");

}


/* =====================================================
   CHECKOUT
===================================================== */

function openCheckout() {

    if (cart.length === 0) {

        showToast(
            "🛒",
            "Cart is Empty",
            "Add some delicious food before checkout."
        );

        return;

    }


    calculateTotals();

    checkoutModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeCheckout() {

    checkoutModal.classList.remove("active");

    document.body.style.overflow = "";

}


/* =====================================================
   PLACE ORDER
===================================================== */

function placeOrder(event) {

    event.preventDefault();


    const mobile =
        document.getElementById("mobileNumber").value.trim();


    if (!/^[0-9]{10}$/.test(mobile)) {

        showToast(
            "⚠️",
            "Invalid Mobile Number",
            "Please enter a valid 10-digit mobile number."
        );

        return;

    }


    const orderNumber =
        Math.floor(1000 + Math.random() * 9000);


    document.getElementById("orderNumber")
        .textContent = orderNumber;


    checkoutModal.classList.remove("active");


    successModal.classList.add("active");


    cart = [];

    saveCart();

    updateCart();


    document
        .getElementById("checkoutForm")
        .reset();

}


/* =====================================================
   SUCCESS MODAL
===================================================== */

function closeSuccess() {

    successModal.classList.remove("active");

    document.body.style.overflow = "";

}


/* =====================================================
   CONTACT FORM
===================================================== */

function submitContactForm(event) {

    event.preventDefault();


    const name =
        document.getElementById("contactName").value.trim();

    const email =
        document.getElementById("contactEmail").value.trim();

    const message =
        document.getElementById("contactMessage").value.trim();


    if (!name || !email || !message) {

        showToast(
            "⚠️",
            "Missing Details",
            "Please complete all contact form fields."
        );

        return;

    }


    if (!isValidEmail(email)) {

        showToast(
            "⚠️",
            "Invalid Email",
            "Please enter a valid email address."
        );

        return;

    }


    document
        .getElementById("contactSuccess")
        .classList.remove("hidden");


    document
        .getElementById("contactForm")
        .reset();


    showToast(
        "📧",
        "Message Sent",
        "Thank you for contacting FoodieHub!"
    );


    setTimeout(() => {

        document
            .getElementById("contactSuccess")
            .classList.add("hidden");

    }, 5000);

}


/* =====================================================
   EMAIL VALIDATION
===================================================== */

function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}


/* =====================================================
   DARK MODE
===================================================== */

function toggleTheme() {

    document.body.classList.toggle("dark-mode");


    const isDark =
        document.body.classList.contains("dark-mode");


    localStorage.setItem(
        "foodiehubTheme",
        isDark ? "dark" : "light"
    );


    updateThemeIcon();

}


function loadTheme() {

    const savedTheme =
        localStorage.getItem("foodiehubTheme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

    }


    updateThemeIcon();

}


function updateThemeIcon() {

    const themeToggle =
        document.getElementById("themeToggle");


    const isDark =
        document.body.classList.contains("dark-mode");


    themeToggle.textContent =
        isDark ? "☀️" : "🌙";

}


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMobileMenu() {

    const navMenu =
        document.getElementById("navMenu");

    navMenu.classList.toggle("active");


    document
        .getElementById("hamburger")
        .classList.toggle("active");

}


/* Close mobile menu after clicking a link */

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            document
                .getElementById("navMenu")
                .classList.remove("active");

        });

    });


/* =====================================================
   COUNTDOWN TIMER
===================================================== */

function initializeCountdown() {

    if (!countdownEnd) {

        countdownEnd =
            Date.now() +
            (
                2 * 24 * 60 * 60 * 1000 +
                14 * 60 * 60 * 1000 +
                35 * 60 * 1000 +
                20 * 1000
            );


        localStorage.setItem(
            "foodiehubOfferEnd",
            countdownEnd
        );

    }


    updateCountdown();


    setInterval(
        updateCountdown,
        1000
    );

}


function updateCountdown() {

    const now = Date.now();

    let distance =
        countdownEnd - now;


    if (distance <= 0) {

        countdownEnd =
            Date.now() +
            2 * 24 * 60 * 60 * 1000;

        localStorage.setItem(
            "foodiehubOfferEnd",
            countdownEnd
        );

        distance =
            countdownEnd - Date.now();

    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60)) /
            1000
        );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


/* =====================================================
   TESTIMONIAL SLIDER
===================================================== */

function createTestimonialDots() {

    const testimonials =
        document.querySelectorAll(".testimonial");

    const dotsContainer =
        document.getElementById("sliderDots");


    dotsContainer.innerHTML = "";


    testimonials.forEach((_, index) => {

        const dot =
            document.createElement("button");

        dot.className =
            `slider-dot ${index === 0 ? "active" : ""}`;

        dot.setAttribute(
            "aria-label",
            `Show testimonial ${index + 1}`
        );


        dot.addEventListener("click", () => {

            currentTestimonial = index;

            showTestimonial(index);

        });


        dotsContainer.appendChild(dot);

    });

}


function showTestimonial(index) {

    const testimonials =
        document.querySelectorAll(".testimonial");

    const dots =
        document.querySelectorAll(".slider-dot");


    testimonials.forEach((testimonial, i) => {

        testimonial.classList.toggle(
            "active",
            i === index
        );

    });


    dots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === index
        );

    });

}


/* =====================================================
   TOAST NOTIFICATION
===================================================== */

let toastTimeout;


function showToast(
    icon,
    title,
    message
) {

    document.getElementById("toastIcon")
        .textContent = icon;


    document.getElementById("toastTitle")
        .textContent = title;


    document.getElementById("toastMessage")
        .textContent = message;


    toast.classList.add("show");


    clearTimeout(toastTimeout);


    toastTimeout =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 3500);

}


document
    .getElementById("closeToast")
    .addEventListener("click", () => {

        toast.classList.remove("show");

    });


/* =====================================================
   LOCAL STORAGE CHECK
===================================================== */

/*
    Cart and favorites are saved automatically.

    Theme is also saved.

    Therefore refreshing the browser will not
    remove the user's cart, favorites or theme.
*/


/* =====================================================
   SMOOTH SCROLL FOR ALL ANCHOR LINKS
===================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", function(event) {

            const targetId =
                this.getAttribute("href");


            if (targetId === "#") {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) return;


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


/* =====================================================
   CLICK OUTSIDE MODALS
===================================================== */

favoritesModal.addEventListener("click", event => {

    if (event.target === favoritesModal) {

        closeFavorites();

    }

});


checkoutModal.addEventListener("click", event => {

    if (event.target === checkoutModal) {

        closeCheckout();

    }

});


successModal.addEventListener("click", event => {

    if (event.target === successModal) {

        closeSuccess();

    }

});


