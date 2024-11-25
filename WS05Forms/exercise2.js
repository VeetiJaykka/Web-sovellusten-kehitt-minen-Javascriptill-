
function calculateCost() {
    const membershipType = document.getElementById("membershipType").value;
    const years = parseInt(document.getElementById("years").value) || 0;
    const costsField = document.getElementById("costs");
    const discountInfo = document.getElementById("discountInfo");

    let cost = membershipType * years;
    discountInfo.textContent = "";

    if (years > 2) {
        const discount = cost * 0.2; // 20% discount
        cost -= discount;
        discountInfo.textContent = `You got a 20% discount!`;
        if (years >= 5) {
            cost -= 5; // Additional €5 discount
            discountInfo.textContent += ` Plus, an extra €5 discount! Thank you for your loyalty!`;
        }
    }

    costsField.value = `${cost}€`;
}
    