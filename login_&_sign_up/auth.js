// file này lưu những xử lí về token đăng nhập, khi dùng token thì import file này vào



// Hàm lưu trữ token trong localStorage
function saveToken(token) {
    localStorage.setItem('token', token);
}

// Hàm lấy token từ localStorage (hiện đang đăng nhập)
function getToken() {
    return localStorage.getItem('token');
}

// Hàm giải mã JWT token
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

// Kiểm tra xem token có hợp lệ và còn thời hạn không
function isTokenValid() {
    const token = getToken();
    if (!token) {
        return false;
    }

    const decodedToken = parseJwt(token);
    const currentTime = Math.floor(Date.now() / 1000); // Thời gian hiện tại tính bằng giây

    return decodedToken.exp > currentTime;
}

// Xóa token khi hết hạn
function removeToken() {
    localStorage.removeItem('token');
}

// Kiểm tra và xử lý token
function handleToken() {
    if (!isTokenValid()) {
        removeToken();
        window.location.href = "/login.html";  // Chuyển hướng về trang đăng nhập
    }
}

// Export các hàm để sử dụng trong file khác
export { saveToken, getToken, isTokenValid, removeToken, handleToken };
