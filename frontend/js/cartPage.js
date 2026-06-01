function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let container = document.getElementById("cartContainer");

    let total = 0;

    container.innerHTML = "";

    cart.forEach((item, index) => {

        total += item.price;

        container.innerHTML += `
            <div>
                <img src="${item.image}" width="100">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>

                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </div>
            <hr>
        `;
    });

    document.getElementById("totalPrice").innerText =
        "Total: $" + total;
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
}

loadCart();