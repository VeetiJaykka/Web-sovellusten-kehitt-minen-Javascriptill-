
function toggleExtraField() {
    const contactMethod = document.getElementById("contactMethod").value;
    const extraField = document.getElementById("extraField");
    const extraFieldLabel = document.getElementById("extraFieldLabel");

    if (contactMethod === "") {
        extraField.style.display = "none";
    } else {
        extraField.style.display = "block";
        extraFieldLabel.textContent = `Enter your ${contactMethod} details:`;
    }
}
    