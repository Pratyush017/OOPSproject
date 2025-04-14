const movies = [
    {
        title: "Interstellar",
        timing: "5 PM",
        genre: "sci-fi",
        price: 150,
        imageUrl: "data:image/jpeg;base64,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"
    },
    {
        title: "Inception",
        timing: "7 PM",
        genre: "sci-fi",
        price: 180,
        imageUrl: "https://www.tallengestore.com/cdn/shop/products/Inception-LeonardoDiCaprio-ChristopherNolan-HollywoodSciFiMoviePoster2_e9f0c697-8573-417e-b23d-c913402a6769.jpg?v=1685582027"
    },
    {
        title: "3 Idiots",
        timing: "9 PM",
        genre: "comedy",
        price: 120,
        imageUrl: "data:image/jpeg;base64,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"
    }
];

function displayMovies() {
    const list = document.getElementById('moviesList');
    list.innerHTML = '';
    movies.forEach(movie => {
        list.innerHTML += `<p><strong>${movie.title}</strong> | Genre: ${movie.genre} | Timing: ${movie.timing} | Price: Rs.${movie.price}</p>`;
    });
}

function addMovie() {
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const timing = document.getElementById('timing').value;
    const price = document.getElementById('price').value;
    if (title && genre && timing && price) {
        movies.push({
            title,
            genre,
            timing,
            price
        });
        displayMovies();
        alert("Movie added successfully!");
    } else {
        alert("Please fill all movie details.");
    }
}


function suggestByMood() {
    const mood = document.getElementById('moodInput').value.toLowerCase();
    let genre = "any";
    if (mood === "happy") genre = "comedy";
    else if (mood === "sad") genre = "drama";
    else if (mood === "excited") genre = "action";
    else if (mood === "thoughtful") genre = "documentary";
    else if (mood === "romantic") genre = "romance";
    else if (mood === "horror") genre = "horror";
    else if (mood === "curious") genre = "sci-fi";

    const suggestions = movies.filter(movie => movie.genre.toLowerCase() === genre || genre === "any");
    const output = document.getElementById('suggestedMovies');
    output.innerHTML = '';
    if (suggestions.length > 0) {
        suggestions.forEach(movie => {
            output.innerHTML += `<p><strong>${movie.title}</strong> | Genre: ${movie.genre} | Timing: ${movie.timing}</p>`;
        });
    } else {
        output.innerText = "No suggestions available for your mood right now.";
    }
}
const bookedSeats = new Set();
const bookings = [];

function populateMovieList() {
    const select = document.getElementById("movieSelect");
    const movieList = document.getElementById("movies");
    movies.forEach(({
        title,
        timing,
        price,
        imageUrl
    }) => {

        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.gap = "20px";
        li.style.marginBottom = "60px";

        li.innerHTML = `
      <img src="${imageUrl}" alt="${title}" style="width: 110px; height: 145px;">
      <div>
        <div><strong>${title}</strong></div>
        <div>Timing: ${timing}</div>
        <div>Rs.${price}</div>
      </div>
    `;
        movieList.appendChild(li);

        select.add(new Option(title, title));
    });

    function updateMovieDetails() {
        const movie = movies.find(m => m.title === document.getElementById("movieSelect").value);
        if (movie) {
            document.getElementById("timing").value = movie.timing;
            document.getElementById("price").value = movie.price;
            document.getElementById("movieImage").src = movie.imageUrl;
        }
    }

    updateMovieDetails();
    select.addEventListener("change", updateMovieDetails);
}



function bookTicket() {
    const movie = document.getElementById("movieSelect").value;
    const seatNum = document.getElementById("seatNumber").value;
    const {
        title,
        timing,
        price
    } = movies.find(m => m.title === movie);
    const total = price + (document.getElementById("popcorn").checked ? 50 : 0);
    const payment = parseFloat(document.getElementById("payment").value);
    const output = document.getElementById("output");

    if (!seatNum || seatNum <= 0 || bookedSeats.has(seatNum)) {
        output.innerHTML = `<span style="color:red;">Invalid seat or already booked!</span>`;
        return;
    }

    if (payment < total) {
        output.innerHTML = `<span style="color:red;">Insufficient payment. Rs.${total} required.</span>`;
        return;
    }

    bookedSeats.add(seatNum);
    bookings.push(`${movie} | Seat: ${seatNum} | Timing: ${timing} | Popcorn: ${document.getElementById("popcorn").checked ? "Yes" : "No"} | Rs.${total}`);

    function updateBookingHistory() {
        document.getElementById("bookingHistory").innerHTML = bookings.map(b => `<li>${b}</li>`).join('');
    }
    updateBookingHistory();
    output.innerHTML = `<span style="color:green;">Booking successful! Change: Rs.${(payment - total).toFixed(2)}</span>`;
}

function toggleAdmin() {
    const adminSection = document.getElementById('adminSection');
    const adminButton = document.getElementById('adminButton');


    if (adminSection.style.display === 'none') {
        adminSection.style.display = 'block';
        adminButton.textContent = 'Hide Admin Section';
    } else {
        adminSection.style.display = 'none';
        adminButton.textContent = 'Admin Section';
    }
}


populateMovieList();
