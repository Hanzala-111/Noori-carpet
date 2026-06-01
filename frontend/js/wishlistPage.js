function loadWishlist() {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    let container = document.getElementById("wishlistContainer");

    container.innerHTML = "";

    wishlist.forEach((item, index) => {

        container.innerHTML += `
            <div>
                <img src="${item.image}" width="100">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>

                <button onclick="removeWishlist(${index})">
                    Remove
                </button>
            </div>
            <hr>
        `;
    });
}

function removeWishlist(index) {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.splice(index, 1);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    loadWishlist();
}

loadWishlist();