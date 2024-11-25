
function saveData() {
    const destination = document.getElementById("destination").value;
    const arrivalDate = document.getElementById("arrivalDate").value;
    const services = Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
                          .map(cb => cb.value);

    localStorage.setItem("destination", destination);
    localStorage.setItem("arrivalDate", arrivalDate);
    localStorage.setItem("services", JSON.stringify(services));

    alert("Data saved to localStorage!");
}
    