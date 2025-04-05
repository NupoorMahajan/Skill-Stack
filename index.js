const dummyCredentials = [
    { email: "nupoor@skillstack.com", password: "nupoor" },
    { email: "rakshit@skillstack.com", password: "rakshit" }
];

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const icon = document.querySelector('.password-toggle i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

const errorMessageDiv = document.createElement('div');
errorMessageDiv.id = 'error-message';
errorMessageDiv.style.color = '#FF7F11';
errorMessageDiv.style.textAlign = 'center';
errorMessageDiv.style.marginTop = '10px';
errorMessageDiv.style.display = 'none';
document.querySelector('.login-form').after(errorMessageDiv);

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember').checked;
    
    const validCredential = dummyCredentials.find(
        cred => cred.email === email && cred.password === password
    );
    
    if (validCredential) {
        errorMessageDiv.style.display = 'none';
        
        localStorage.setItem('isLoggedIn', 'true');
        
        if (rememberMe) {
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', email.split('@')[0]);
        }
        
        window.location.href = 'home.html';
    } else {
        errorMessageDiv.textContent = 'Invalid email or password. Please try again.';
        errorMessageDiv.style.display = 'block';
    }
});

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        window.location.href = 'home.html';
    }
}