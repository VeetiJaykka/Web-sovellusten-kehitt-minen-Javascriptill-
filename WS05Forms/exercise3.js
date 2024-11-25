
function calculateTotal() {
    const quantity = parseInt(document.getElementById("quantity").value) || 0;
    const price = parseFloat(document.getElementById("price").value) || 0;
    const vat = parseFloat(document.getElementById("vat").value) || 0;
    const discount = parseFloat(document.getElementById("discount").value) || 0;
    const shipping = parseFloat(document.getElementById("shipping").value) || 0;

    let totalDiscount = discount;
    if (quantity > 100) {
        totalDiscount *= 2; // Double the discount
    }

    const subtotal = quantity * price;
    const total = subtotal + (subtotal * vat / 100) - totalDiscount + shipping;

    document.getElementById("total").value = `${total.toFixed(2)}€`;
}
    