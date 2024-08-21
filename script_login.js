function openTab(event, tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    const tabLinks = document.getElementsByClassName('tab-link');

    // Ẩn tất cả các nội dung tab
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
        tabContents[i].classList.remove('active');
    }

    // Xóa trạng thái active khỏi tất cả các tab link
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active');
    }

    // Hiển thị tab hiện tại và thêm class active cho tab link
    document.getElementById(tabName).style.display = 'block';
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

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
        messageElement.textContent = result.message;
        messageElement.style.color = '#a3efd4';
        messageElement.style.display = 'block';
        window.location.href = "dashboard.html";
    } else {
        messageElement.textContent = result.detail;
        messageElement.style.color = '#eb8793';
        messageElement.style.display = 'block';
    }
});



