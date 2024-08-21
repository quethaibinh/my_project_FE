document.getElementById('signUpForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const emailInput = document.getElementById('newEmail');
    const passwordInput = document.getElementById('newPassword');
    const nameInput = document.getElementById('name');
    const sexInput = document.getElementById('sex');
    const ageInput = document.getElementById('age');

    const email = emailInput.value;
    const password = passwordInput.value;
    const name = nameInput.value;
    const sex = sexInput.value;
    const age = ageInput.value;

    const response = await fetch('http://127.0.0.1:8000/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
            name: name,
            sex: sex,
            age: parseInt(age)
        })
    });

    const result = await response.json();

    const messageElement = document.getElementById('signUpMessage');
    
    if (response.ok) {
        messageElement.textContent = "User created successfully!";
        messageElement.style.color = '#a3efd4';
        messageElement.style.display = 'block';
        // làm trống các ô sau khi đăng kí thành công
        emailInput.value = '';
        passwordInput.value = '';
        nameInput.value = '';
        sexInput.value = '';
        ageInput.value = '';
    } else {
        messageElement.textContent = "Registration information is not in correct format!";
        messageElement.style.color = '#eb8793';
        messageElement.style.display = 'block';
    }
    messageElement.style.display = 'block';
});