
function loadData() {
    const destination = localStorage.getItem("destination");
    const arrivalDate = localStorage.getItem("arrivalDate");
    const services = JSON.parse(localStorage.getItem("services")) || [];

    const sessionDataDiv = document.getElementById("sessionData");
    if (destination || arrivalDate || services.length > 0) {
        sessionDataDiv.innerHTML = `
            <p><strong>Destination:</strong> ${destination || "Not set"}</p>
            <p><strong>Arrival Date:</strong> ${arrivalDate || "Not set"}</p>
            <p><strong>Services:</strong> ${services.join(", ") || "None selected"}</p>
        `;
    } else {
        sessionDataDiv.textContent = "No data found in localStorage!";
    }
}
    