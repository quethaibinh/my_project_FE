
import {saveToken, handleToken} from './auth.js';

handleToken();

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const email = emailInput.value;
    const password = passwordInput.value;

    const response = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            username: email,
            password: password
        })
    });

    const result = await response.json();

    const messageElement = document.getElementById('loginMessage');
    
    if (response.ok) {
        saveToken(result.access_token);  // Lưu token vào localStorage
        window.location.href = "../web_layout/dashboard.html";
        // Dấu ../ sẽ đưa bạn trở lại một cấp thư mục từ vị trí hiện tại trước khi đi vào thư mục web_layout để truy cập tệp dashboard.html.
    } else {
        messageElement.textContent = result.detail;
        messageElement.style.color = '#eb8793';
        messageElement.style.display = 'block';
    }
});



