function getID(id) {
  return document.getElementById(id);
}

function getIDAccount(email) {
    // lấy danh sách từ LocalStorage về
    const data = localStorage.getItem("accounts");
    let accounts = JSON.parse(data);

    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].email === email) {
            return accounts[i].password;
        }
    }
    return -1;
}

const btnLogin = getID("btnLogin");

btnLogin.onclick = function() {
    const loginEmail = getID("loginEmail").value;
    const loginPassword = getID("loginPassword").value;

    // tìm account và trả về password
    const password = getIDAccount(loginEmail);

    // xác thực password
    if (password == -1) {
        alert("Tài khoản không tồn tại");
    } else if (password !== loginPassword) {
        alert("Mật khẩu không chính xác");
    } else if (password === loginPassword) {
        alert("Đăng nhập thành công!");
        // chuyển sang trang chủ nếu đăng nhập ok
        window.location.href = "dashboard.html";
    }
}