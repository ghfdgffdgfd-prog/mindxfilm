const params = new URLSearchParams(window.location.search)
const id = params.get("id");
console.log("Flim ID:" + id)

async function getFilmDetail(id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjJiZDkxMzE1ZjVhNDFhMDFhZTI5M2JlNjNiZWVmOCIsIm5iZiI6MTc2MDc1MTE0OC40NDYsInN1YiI6IjY4ZjJlZTJjOWIyYWJlODdiZTA4NmVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e0ID23IifCyA7PQObIOHrhExVA0TFn1oMbigQf6ms3s",
    },
  };

  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
  const data = await res.json();

  return data;
}

const data = await getFilmDetail(id);
console.log(data)

const main = document.getElementById("main");

main.innerHTML = `
    <div class="film-detail">
        <div class="poster">
            <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${data.title}">
        </div>

        <div class="info">
            <h2 class="title">${data.title}</h2>
            <h3>${data.tagline}</h3>
            <p><b>Overview:</b> ${data.overview}</p>
            <p><b>Status:</b> ${data.status}</p>
            <p><b>Runtime:</b> ${data.runtime} min</p>
            <p><b>Original language:</b> ${data.original_language}</p>
            <p><b>Rating Average:</b> ${data.vote_average}/10 (${data.vote_count} vote)</p>
            <p><b>Type:</b> ${data.genres.map(g => g.name).join(', ')}</p>
        </div>
    </div>
`;