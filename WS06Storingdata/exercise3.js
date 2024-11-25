
function saveSessionData() {
    const destination = document.getElementById("destination").value;
    const arrivalDate = document.getElementById("arrivalDate").value;
    const services = Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
                          .map(cb => cb.value);

    sessionStorage.setItem("destination", destination);
    sessionStorage.setItem("arrivalDate", arrivalDate);
    sessionStorage.setItem("services", JSON.stringify(services));

    alert("Data saved to sessionStorage!");
}
    