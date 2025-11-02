let Computers = [
  {
    name: "Macbook Pro M4",
    price: 1000,
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_4__7.png",
  },
  {
    name: "Macbook Air M4",
    price: 1500,
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_4__7.png",
  },
  {
    name: "Asus TUF Gaming",
    price: 2000,
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_4__7.png",
  },
  {
    name: "Thinkpad Carboon",
    price: 3000,
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_4__7.png",
  },
];
// Cách cũ
//const computerList = document.getElementById("computerList");

//for (let i = 0; i < Computers.length; i++) {
// const cp = Computers[i];  // lấy máy tính tại vị trí i trong Computers

//  let html = `
// <div class="card">

//  <img src="${cp.img}" alt="">
// <p class="name">${cp.name}</p>
//  <p class="price">${cp.price}</p>

//  </div>
// `;
// computerList.innerHTML += html;

// }

//Cách hiện đại hơn
function renderComputer() {
  const computerList = document.getElementById("computerList");

  computerList.innerHTML = "";  // làm trống danh sách trước khi chạy
  for (let i = 0; i < Computers.length; i++) {
    const cp = Computers[i];  // lấy máy tính tại vị trí i trong Computers

    let element = document.createElement("div");
    element.className = "card";

    element.innerHTML = `
        <img src="${cp.img}" alt="">
        <p class="name">${cp.name}</p>
        <p class="price">Giá: ${cp.price}</p>
        <button onclick="removeComputer(${i})"> Xoá </button>
    `;
    computerList.appendChild(element);  // thêm element là con của computerList
  }
}
  

function addComputer() {
  // 1. Lấy giá trị của 3 ô input người dùng nhập 
  const name = document.getElementById("nameInput").value;
  const price = document.getElementById("priceInput").value;
  const img = document.getElementById("imgInput").value;

  Computers.push({
    name: name,
    price: price,
    img: img
  })


  // 2. Tạo phần tử html
  let element = document.createElement("div");
  element.className = "card";

  element.innerHTML = `
      <img src="${img}" alt="">
      <p class="name">${name}</p>
      <p class="price">Giá: ${price}</p>
      <button onclick="removeComputer(${Computers.length - 1})"> Xoá </button>
  `;

  // 3. Dùng appendChild để đẩy vào
  computerList.appendChild(element);
}


function removeComputer(i) {
  Computers.splice(i, 1);  // xoá 1 phần tử tại vị trí i trong Computers
  renderComputer();
}



renderComputer()