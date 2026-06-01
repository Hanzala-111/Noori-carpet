const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value =
            searchInput.value.toLowerCase();

        const filtered =
            products.filter(product =>

                product.name
                    .toLowerCase()
                    .includes(value)

            );

        displayProducts(filtered);

    });

}