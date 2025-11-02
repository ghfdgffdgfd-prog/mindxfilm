const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjJiZDkxMzE1ZjVhNDFhMDFhZTI5M2JlNjNiZWVmOCIsIm5iZiI6MTc2MDc1MTE0OC40NDYsInN1YiI6IjY4ZjJlZTJjOWIyYWJlODdiZTA4NmVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e0ID23IifCyA7PQObIOHrhExVA0TFn1oMbigQf6ms3s'
  }
};


async function getData() {
  const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
  const data = await res.json();
  return data.results;
} 

// gọi hàm lấy dữ liệu
const data = await getData();
console.log(data);

// lấy đối tượng danh sách từ HTML -> đẩy dữ liệu vào
const listfilm = document.getElementById("listfilm");

// lặp qua từng bộ film để đẩy lên HTML
for (let i = 0; i < data.length; i++) {
  const film = data[i];   // film thứ i trong data

  // tạo thẻ <div class="movie-card"> </div>
  let card = document.createElement("div");
  card.className = "movie-card";

  // định nghĩa link ảnh trong film 
  let poster_path = "https://image.tmdb.org/t/p/w500" + film.poster_path

  // định nghĩa code trong thẻ <div> 
  card.innerHTML =
  `
    <a href="info.html?id=${film.id}">
      <img src="${poster_path}" alt="">
      <p> ${film.title} </p>
    </a>
  `
  listfilm.appendChild(card);  // đẩy film vào danh sách
}