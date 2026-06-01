function getWishlist() {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function addToWishlist(product) {
    let wishlist = getWishlist();

    wishlist.push(product);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert("Added to wishlist!");
}