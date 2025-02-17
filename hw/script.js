document.addEventListener("DOMContentLoaded", () => {
    const cart = document.getElementById("cart");
    const totalElement = document.getElementById("total");
    let total = 0;

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", event => {
            const product = event.target.closest(".product");
            const name = product.getAttribute("data-name");
            const price = parseFloat(product.getAttribute("data-price"));

            const listItem = document.createElement("li");
            listItem.textContent = `${name} - ${price} บาท`;

            const removeButton = document.createElement("button");
            removeButton.textContent = "ลบ";
            removeButton.classList.add("remove");
            removeButton.addEventListener("click", () => {
                cart.removeChild(listItem);
                total -= price;
                totalElement.textContent = total;
            });

            listItem.appendChild(removeButton);
            cart.appendChild(listItem);

            total += price;
            totalElement.textContent = total;
        });
    });
});
