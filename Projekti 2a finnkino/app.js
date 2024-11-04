const finnKinoTheaterURL = 'https://www.finnkino.fi/xml/TheatreAreas/';
const finnKinoScheduleURL = 'https://www.finnkino.fi/xml/Schedule/?area=';

// Fetch the list of theaters
async function fetchTheaters() {
    try {
        const response = await fetch(finnKinoTheaterURL);
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "text/xml");
        const theaters = xml.getElementsByTagName("TheatreArea");

        const theaterSelect = document.getElementById("theater-select");
        for (let theater of theaters) {
            const id = theater.getElementsByTagName("ID")[0].textContent;
            const name = theater.getElementsByTagName("Name")[0].textContent;

            const option = document.createElement("option");
            option.value = id;
            option.textContent = name;
            theaterSelect.appendChild(option);
        }
    } catch (error) {
        console.error("Error fetching theaters:", error);
    }
}

// Fetch the movie schedule for a selected theater
async function fetchSchedule() {
    const theaterId = document.getElementById("theater-select").value;
    if (!theaterId) return;

    try {
        const response = await fetch(finnKinoScheduleURL + theaterId);
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "text/xml");
        const shows = xml.getElementsByTagName("Show");

        const movieDisplay = document.getElementById("movie-display");
        movieDisplay.innerHTML = "";

        for (let show of shows) {
            const title = show.getElementsByTagName("Title")[0].textContent;
            const imageURL = show.getElementsByTagName("EventLargeImagePortrait")[0].textContent;
            const showtime = show.getElementsByTagName("dttmShowStart")[0].textContent;

            const movieItem = document.createElement("div");
            movieItem.className = "movie-item";

            const img = document.createElement("img");
            img.src = imageURL;
            img.alt = `${title} Poster`;

            const movieTitle = document.createElement("h3");
            movieTitle.textContent = title;

            const movieShowtime = document.createElement("p");
            movieShowtime.textContent = `Showtime: ${new Date(showtime).toLocaleString()}`;

            movieItem.appendChild(img);
            movieItem.appendChild(movieTitle);
            movieItem.appendChild(movieShowtime);

            movieDisplay.appendChild(movieItem);
        }
    } catch (error) {
        console.error("Error fetching schedule:", error);
    }
}

// Initial load
fetchTheaters();
