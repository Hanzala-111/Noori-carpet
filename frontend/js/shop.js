
const products = [
    {
        name: "Royal Persian",
        category: "Persian",
        price: 899,
        image: "assets/images/11.jpg",
        country: "Iran",
        description: "Luxury handmade Persian carpet with traditional patterns."
    },
    {
        name: "Luxury Modern",
        category: "Modern",
        price: 699,
        image: "assets/images/10.jpg",
        country: "Turkey",
        description: "Modern stylish carpet perfect for living rooms."
    },
    {
        name: "Vintage Classic",
        category: "Vintage",
        price: 799,
        image: "assets/images/9.png",
        country: "Afghanistan",
        description: "Classic vintage carpet with antique design."
    },
    {
        name: "Golden Persian",
        category: "Persian",
        price: 999,
        image: "assets/images/8.jpg",
        country: "Iran",
        description: "Premium golden Persian carpet with luxury finish."
    },
    {
        name: "Golden Turkey",
        category: "Turkey",
        price: 1099,
        image: "assets/images/16.webp",
        country: "Turkey",
        description: "High-quality Turkish carpet with golden design."
    },
    {
        name: "Vintage Turkey",
        category: "Turkey",
        price: 899,
        image: "assets/images/17.jpg",
        country: "Turkey",
        description: "Vintage Turkish carpet with elegant style."
    }
];

const container = document.getElementById("productsContainer");

function displayProducts(items) {

    container.innerHTML = "";

    const wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    items.forEach(product => {

        const isWishlisted = wishlist.some(
            item => item.name.trim() === product.name.trim()
        );
        const cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        const isInCart = cart.some(
            item => item.name.trim() === product.name.trim()
        );
        container.innerHTML += `
        <div class="shop-card">

            <span class="heart ${isWishlisted ? "active" : ""}">
                ${isWishlisted ? "❤️" : "🤍"}
            </span>

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>$${product.price}</p>

            <p>${product.category}</p>

            <div class="shop-actions">

    <a class="btn"
       href="product.html?name=${encodeURIComponent(product.name)}
       &price=${product.price}
       &image=${encodeURIComponent(product.image)}
       &category=${encodeURIComponent(product.category)}
       &country=${encodeURIComponent(product.country)}
       &description=${encodeURIComponent(product.description)}">
       View Details
    </a>

    ${isInCart
                ? '<span class="cart-status">🛒 In Cart</span>'
                : ''
            }

</div>

        </div>
        `;
    });

    document.querySelectorAll(".heart").forEach((heart, index) => {

        heart.addEventListener("click", () => {
            toggleWishlist(heart, items[index]);
        });

    });

}

function toggleWishlist(el, product) {

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find(
        item => item.name.trim() === product.name.trim()
    );

    if (exists) {

        wishlist = wishlist.filter(
            item => item.name.trim() !== product.name.trim()
        );

        el.innerHTML = "🤍";
        el.classList.remove("active");

    } else {

        wishlist.push(product);

        el.innerHTML = "❤️";
        el.classList.add("active");
    }

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );
}

// Initial Load
displayProducts(products);

// Filter
const filter = document.getElementById("filterCategory");

if (filter) {

    filter.addEventListener("change", () => {

        if (filter.value === "All") {

            displayProducts(products);
            return;
        }

        const filtered = products.filter(product =>
            product.category === filter.value
        );

        displayProducts(filtered);

    });

}















// const products = [
//     {
//         name: "Royal Persian",
//         category: "Persian",
//         price: 899,
//         image: "assets/images/11.jpg",
//         country: "Iran",
//         description: "Luxury handmade Persian carpet with traditional patterns."
//     },
//     {
//         name: "Luxury Modern",
//         category: "Modern",
//         price: 699,
//         image: "assets/images/10.jpg",
//         country: "Turkey",
//         description: "Modern stylish carpet perfect for living rooms."
//     },
//     {
//         name: "Vintage Classic",
//         category: "Vintage",
//         price: 799,
//         image: "assets/images/9.png",
//         country: "Afghanistan",
//         description: "Classic vintage carpet with antique design."
//     },
//     {
//         name: "Golden Persian",
//         category: "Persian",
//         price: 999,
//         image: "assets/images/8.jpg",
//         country: "Iran",
//         description: "Premium golden Persian carpet with luxury finish."
//     },
//     {
//         name: "Golden Turkey",
//         category: "Turkey",
//         price: 1099,
//         image: "assets/images/16.webp",
//         country: "Turkey",
//         description: "High-quality Turkish carpet with golden design."
//     },
//     {
//         name: "Vintage Turkey",
//         category: "Turkey",
//         price: 899,
//         image: "assets/images/17.jpg",
//         country: "Turkey",
//         description: "Vintage Turkish carpet with elegant style."
//     }
// ];

// const container = document.getElementById("productsContainer");

// function displayProducts(items) {
//     container.innerHTML = "";

//     items.forEach(product => {

//         const query = new URLSearchParams({
//             name: product.name,
//             price: product.price,
//             image: product.image,
//             category: product.category,
//             country: product.country,
//             description: product.description
//         }).toString();

//         container.innerHTML += `
//     <div class="shop-card">

//     <span class="heart">🤍</span>

//     <img src="${product.image}" alt="${product.name}">

//     <h3>${product.name}</h3>

//     <p>$${product.price}</p>

//     <p>${product.category}</p>

//     <a class="btn" href="product.html?name=${encodeURIComponent(product.name)}&price=${product.price}&image=${encodeURIComponent(product.image)}&category=${encodeURIComponent(product.category)}">
//         View Details
//     </a>

//     </div>
//     `;
//     });
//     setTimeout(() => {
//     document.querySelectorAll(".heart").forEach((heart, index) => {
//         heart.addEventListener("click", () => {
//             toggleWishlist(heart, items[index]);
//         });
//     });
// }, 0);
// }

// // initial load
// displayProducts(products);

// // FILTER
// const filter = document.getElementById("filterCategory");

// if (filter) {
//     filter.addEventListener("change", () => {

//         if (filter.value === "All") {
//             displayProducts(products);
//             return;
//         }

//         const filtered = products.filter(p =>
//             p.category === filter.value
//         );

//         displayProducts(filtered);
//     });
// }


// function toggleWishlist(el, product) {

//     el.classList.toggle("active");

//     let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

//     const exists = wishlist.find(item => item.name === product.name);

//     if (exists) {
//         wishlist = wishlist.filter(item => item.name !== product.name);
//     } else {
//         wishlist.push(product);
//     }

//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
// }

