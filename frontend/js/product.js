const params = new URLSearchParams(window.location.search);

const cartBtn = document.getElementById("cartBtn");

const wishlistBtn = document.getElementById("wishlistBtn");

function updateWishlistButton() {

    const wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    const productName =
        params.get("name")?.trim();

    const exists = wishlist.find(
        item => item.name?.trim() === productName
    );

    if (exists) {

        wishlistBtn.innerHTML =
            "❤️ Remove from Wishlist";

        wishlistBtn.classList.add("active");

    } else {

        wishlistBtn.innerHTML =
            "🤍 Add to Wishlist";

        wishlistBtn.classList.remove("active");
    }
}

document.getElementById("productName").textContent =
    params.get("name");

document.getElementById("productPrice").textContent =
    "$" + params.get("price");

document.getElementById("mainImage").src =
    params.get("image");

document.getElementById("productCategory").textContent =
    params.get("category");

document.getElementById("productCountry").textContent =
    "Made in: " + params.get("country");

document.getElementById("productDescription").textContent =
    params.get("description");


// CART

function addToCartFromPage() {

    const product = {
        name: params.get("name")?.trim(),
        price: Number(params.get("price")),
        image: params.get("image")?.trim()
    };

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find(
        item => item.name?.trim() === product.name
    );

    if (exists) {

        cart = cart.filter(
            item => item.name?.trim() !== product.name
        );

    } else {

        cart.push(product);
    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartButton();
}


// WISHLIST

function addToWishlistFromPage() {

    const product = {
        name: params.get("name"),
        price: Number(params.get("price")),
        image: params.get("image")?.trim(),
        category: params.get("category"),
        country: params.get("country"),
        description: params.get("description")
    };

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find(
        item => item.name?.trim() === product.name?.trim()
    );

    if (exists) {

       wishlist = wishlist.filter(
    item => item.name?.trim() !== product.name?.trim()
    );
    } else {

        wishlist.push(product);
    }

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    updateWishlistButton();
}

updateWishlistButton();

function updateCartButton() {

    const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    const productName =
        params.get("name")?.trim();

    const exists = cart.find(
        item => item.name?.trim() === productName
    );

    if (exists) {

        cartBtn.innerHTML =
            "🗑️ Remove from Cart";

        cartBtn.classList.add("active");

    } else {

        cartBtn.innerHTML =
            "🛒 Add to Cart";

        cartBtn.classList.remove("active");
    }
}

updateCartButton();