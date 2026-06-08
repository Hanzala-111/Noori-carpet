
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// ADD TO CART
function addToCart(product) {
    let cart = getCart();

    cart.push(product);

    saveCart(cart);
4
    alert("Added to cart!");
}

const whatsappBtn =
    document.getElementById("whatsappOrderBtn");

if (whatsappBtn) {

    whatsappBtn.addEventListener("click", () => {

        const cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.length === 0) {

            alert("Your cart is empty!");
            return;
        }

        let total = 0;

        let message =
            `Hello Noori Carpet,

            I would like to order:

            `;

        cart.forEach(item => {

            const quantity = item.quantity || 1;

            const itemTotal =
                item.price * quantity;

            total += itemTotal;

            message +=
                `- ${item.name} x${quantity} - $${itemTotal}
                `;
        });

        message += `
        Total: $${total}
        My name:
        My address:
        My phone:
        `;

        const phone =
            "93786815572";

        const whatsappURL =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(
            whatsappURL,
            "_blank"
        );

    });

}